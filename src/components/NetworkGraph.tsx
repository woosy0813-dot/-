import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import { 
  GRAPH_NODES, 
  GRAPH_EDGES, 
  CLASS_COLORS, 
  GraphNode, 
  GraphEdge 
} from '../data/graphData';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  RotateCcw, 
  Play, 
  Pause, 
  Search, 
  Filter, 
  Info, 
  Layers, 
  Sparkles, 
  Share2,
  Copy,
  Check
} from 'lucide-react';

interface NetworkGraphProps {
  highlightNodeIds?: string[];
  onSelectNodeExternal?: (node: GraphNode | null) => void;
}

export const NetworkGraph: React.FC<NetworkGraphProps> = ({ 
  highlightNodeIds,
  onSelectNodeExternal 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);

  // States
  const [selectedGroupFilters, setSelectedGroupFilters] = useState<Record<string, boolean>>({
    person: true,
    group: true,
    place: true,
    event: true,
    object: true,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isPhysicsActive, setIsPhysicsActive] = useState(true);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [selectedNodeEdges, setSelectedNodeEdges] = useState<{ edge: GraphEdge; otherNodeName: string; direction: 'outgoing' | 'incoming' }[]>([]);
  const [copiedCypher, setCopiedCypher] = useState(false);

  // Filter nodes according to toggle buttons and search query
  const filteredNodes = useMemo(() => {
    return GRAPH_NODES.filter(node => {
      if (!selectedGroupFilters[node.group]) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchLabel = node.label.toLowerCase().includes(query);
        const matchRole = node.role?.toLowerCase().includes(query);
        const matchDesc = node.description?.toLowerCase().includes(query);
        if (!matchLabel && !matchRole && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedGroupFilters, searchQuery]);

  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map(n => n.id)), [filteredNodes]);

  const filteredEdges = useMemo(() => {
    return GRAPH_EDGES.filter(edge => {
      return filteredNodeIds.has(edge.from) && filteredNodeIds.has(edge.to);
    });
  }, [filteredNodeIds]);

  // Sync selection to parent if callback provided
  const handleSelectNode = (node: GraphNode | null) => {
    setSelectedNode(node);
    if (onSelectNodeExternal) {
      onSelectNodeExternal(node);
    }

    if (node) {
      // calculate connected edges
      const connected = GRAPH_EDGES
        .filter(e => e.from === node.id || e.to === node.id)
        .map(e => ({
          edge: e,
          otherNodeName: e.from === node.id ? e.to : e.from,
          direction: (e.from === node.id ? 'outgoing' : 'incoming') as 'outgoing' | 'incoming'
        }));
      setSelectedNodeEdges(connected);
    } else {
      setSelectedNodeEdges([]);
    }
  };

  // Initialize or update vis-network
  useEffect(() => {
    if (!containerRef.current) return;

    // Convert nodes to vis format
    const visNodes = filteredNodes.map(node => {
      const colorSpec = CLASS_COLORS[node.group];
      const isHighlighted = highlightNodeIds && highlightNodeIds.length > 0
        ? highlightNodeIds.includes(node.id)
        : false;

      let size = 20;
      if (node.id === '해리 포터' || node.id === '마법사의 돌') size = 32;
      else if (node.group === 'group') size = 26;
      else if (node.group === 'event') size = 22;

      return {
        id: node.id,
        label: node.label,
        shape: node.group === 'group' ? 'box' : node.group === 'event' ? 'diamond' : 'dot',
        size: isHighlighted ? size * 1.3 : size,
        color: {
          background: isHighlighted ? '#ffffff' : colorSpec.bg,
          border: isHighlighted ? '#fbbf24' : colorSpec.border,
          highlight: {
            background: '#ffffff',
            border: '#f59e0b',
          },
          hover: {
            background: colorSpec.bg,
            border: '#ffffff',
          }
        },
        font: {
          color: isHighlighted ? '#fbbf24' : '#f3ebd7',
          size: isHighlighted ? 15 : 12,
          face: 'Cinzel, Noto Serif KR, serif',
          strokeWidth: 3,
          strokeColor: '#0a0305',
        },
        borderWidth: isHighlighted ? 4 : 2,
        shadow: {
          enabled: true,
          color: isHighlighted ? 'rgba(251, 191, 36, 0.8)' : colorSpec.glow,
          size: isHighlighted ? 20 : 10,
          x: 0,
          y: 0
        }
      };
    });

    const visEdges = filteredEdges.map((edge, idx) => {
      const isHighlighted = highlightNodeIds && highlightNodeIds.length > 0
        ? (highlightNodeIds.includes(edge.from) && highlightNodeIds.includes(edge.to))
        : false;

      return {
        id: `e-${idx}`,
        from: edge.from,
        to: edge.to,
        label: edge.label,
        arrows: {
          to: {
            enabled: true,
            scaleFactor: 0.7,
            type: 'arrow'
          }
        },
        font: {
          color: isHighlighted ? '#fbbf24' : '#a1a1aa',
          size: 9,
          align: 'middle',
          strokeWidth: 2,
          strokeColor: '#0d0507',
          face: 'sans-serif'
        },
        color: {
          color: isHighlighted ? '#f59e0b' : 'rgba(212, 175, 55, 0.45)',
          highlight: '#fbbf24',
          hover: '#ffffff',
          opacity: isHighlighted ? 1 : 0.65
        },
        width: isHighlighted ? 3 : 1.2,
        smooth: {
          enabled: true,
          type: 'continuous',
          roundness: 0.2
        }
      };
    });

    const data = {
      nodes: new DataSet(visNodes),
      edges: new DataSet(visEdges),
    };

    const options = {
      physics: {
        enabled: isPhysicsActive,
        barnesHut: {
          gravitationalConstant: -3800,
          centralGravity: 0.35,
          springLength: 120,
          springConstant: 0.04,
          damping: 0.09,
          avoidOverlap: 0.4
        },
        stabilization: {
          iterations: 150,
          updateInterval: 25
        }
      },
      interaction: {
        hover: true,
        tooltipDelay: 150,
        zoomView: true,
        dragView: true,
        navigationButtons: false,
      },
      nodes: {
        scaling: {
          min: 16,
          max: 36
        }
      }
    };

    const network = new Network(containerRef.current, data, options);
    networkRef.current = network;

    network.on('click', (params) => {
      if (params.nodes && params.nodes.length > 0) {
        const clickedId = params.nodes[0] as string;
        const found = GRAPH_NODES.find(n => n.id === clickedId) || null;
        handleSelectNode(found);
      } else {
        handleSelectNode(null);
      }
    });

    // If external highlight changes, focus on it
    if (highlightNodeIds && highlightNodeIds.length > 0) {
      const primary = highlightNodeIds[0];
      if (filteredNodeIds.has(primary)) {
        setTimeout(() => {
          network.focus(primary, {
            scale: 1.15,
            animation: {
              duration: 800,
              easingFunction: 'easeInOutQuad'
            }
          });
          const found = GRAPH_NODES.find(n => n.id === primary);
          if (found) handleSelectNode(found);
        }, 300);
      }
    }

    return () => {
      network.destroy();
      networkRef.current = null;
    };
  }, [filteredNodes, filteredEdges, highlightNodeIds]);

  // Handle physics toggle
  const togglePhysics = () => {
    const nextState = !isPhysicsActive;
    setIsPhysicsActive(nextState);
    if (networkRef.current) {
      networkRef.current.setOptions({ physics: { enabled: nextState } });
    }
  };

  const handleZoomIn = () => {
    if (!networkRef.current) return;
    const currentScale = networkRef.current.getScale();
    networkRef.current.moveTo({ scale: currentScale * 1.3, animation: { duration: 300, easingFunction: 'easeInOutQuad' } });
  };

  const handleZoomOut = () => {
    if (!networkRef.current) return;
    const currentScale = networkRef.current.getScale();
    networkRef.current.moveTo({ scale: currentScale / 1.3, animation: { duration: 300, easingFunction: 'easeInOutQuad' } });
  };

  const handleResetView = () => {
    if (!networkRef.current) return;
    networkRef.current.fit({
      animation: { duration: 500, easingFunction: 'easeInOutQuad' }
    });
    handleSelectNode(null);
  };

  const toggleGroupFilter = (groupKey: string) => {
    setSelectedGroupFilters(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  };

  const copyCypher = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCypher(true);
    setTimeout(() => setCopiedCypher(false), 2000);
  };

  return (
    <div className="relative w-full rounded-2xl border border-red-900/40 bg-[#0d0507]/90 shadow-2xl backdrop-blur-md overflow-hidden">
      {/* Top Filter and Search Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-red-900/30 bg-[#16080d]/80 px-4 py-3 sm:px-6">
        {/* Class Filter Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200/70 mr-1">
            <Filter className="h-3.5 w-3.5 text-amber-500" /> 노드 필터:
          </span>
          {(Object.keys(CLASS_COLORS) as Array<keyof typeof CLASS_COLORS>).map(cls => {
            const spec = CLASS_COLORS[cls];
            const active = selectedGroupFilters[cls];
            return (
              <button
                key={cls}
                onClick={() => toggleGroupFilter(cls)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  active 
                    ? 'border shadow-sm' 
                    : 'opacity-40 border border-transparent bg-stone-900/40 text-stone-400 line-through'
                }`}
                style={{
                  backgroundColor: active ? `${spec.bg}22` : undefined,
                  borderColor: active ? spec.border : undefined,
                  color: active ? '#f3ebd7' : undefined
                }}
              >
                <span 
                  className="h-2 w-2 rounded-full" 
                  style={{ backgroundColor: spec.bg }} 
                />
                <span>{spec.kr}</span>
                <span className="text-[10px] opacity-75 font-mono">
                  ({GRAPH_NODES.filter(n => n.group === cls).length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search input & graph controls */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
            <input
              type="text"
              placeholder="노드 이름, 역할 검색..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="h-8 w-40 sm:w-52 rounded-lg border border-red-900/40 bg-black/50 pl-8 pr-3 text-xs text-amber-100 placeholder-stone-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
            />
          </div>

          {/* Physics toggle */}
          <button
            onClick={togglePhysics}
            title={isPhysicsActive ? '물리 엔진 고정 (시뮬레이션 정지)' : '물리 엔진 활성화'}
            className={`flex h-8 items-center gap-1 rounded-lg border px-2.5 text-xs font-medium transition-colors ${
              isPhysicsActive 
                ? 'border-amber-600/50 bg-amber-950/30 text-amber-300' 
                : 'border-stone-700 bg-stone-900/50 text-stone-400'
            }`}
          >
            {isPhysicsActive ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            <span className="hidden md:inline">{isPhysicsActive ? '물리 멈춤' : '물리 재개'}</span>
          </button>
        </div>
      </div>

      {/* Main Graph Canvas Area */}
      <div className="relative h-[600px] w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1d0912]/80 via-[#100508]/90 to-[#080204]">
        {/* Watermark / Grid Background Decoration */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* The vis canvas target container */}
        <div ref={containerRef} className="h-full w-full cursor-grab active:cursor-grabbing" />

        {/* Floating Controls Overlay (Zoom / Fit) */}
        <div className="absolute bottom-5 left-5 flex flex-col gap-1.5 rounded-xl border border-red-900/40 bg-[#16080d]/85 p-1.5 shadow-xl backdrop-blur-md">
          <button
            onClick={handleZoomIn}
            className="rounded-lg p-2 text-stone-300 hover:bg-red-900/30 hover:text-amber-300 transition-colors"
            title="확대 (Zoom In)"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="rounded-lg p-2 text-stone-300 hover:bg-red-900/30 hover:text-amber-300 transition-colors"
            title="축소 (Zoom Out)"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            onClick={handleResetView}
            className="rounded-lg p-2 text-stone-300 hover:bg-red-900/30 hover:text-amber-300 transition-colors"
            title="전체 보기 초기화 (Fit Graph)"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        {/* Stats overlay counter */}
        <div className="absolute top-4 left-5 flex items-center gap-3 rounded-lg border border-red-900/30 bg-[#14060b]/75 px-3 py-1.5 text-xs text-amber-200/80 backdrop-blur-sm pointer-events-none">
          <span>렌더링 노드: <strong className="text-amber-400 font-mono">{filteredNodes.length}</strong></span>
          <span className="text-stone-600">|</span>
          <span>관계(엣지): <strong className="text-amber-400 font-mono">{filteredEdges.length}</strong></span>
        </div>

        {/* Right Node Inspector Drawer */}
        {selectedNode && (
          <div className="absolute top-4 right-4 bottom-4 w-80 sm:w-96 rounded-xl border border-red-800/50 bg-[#130509]/95 p-5 shadow-2xl backdrop-blur-lg overflow-y-auto z-20 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between border-b border-red-900/40 pb-3">
                <div className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: CLASS_COLORS[selectedNode.group].bg }}
                  />
                  <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: CLASS_COLORS[selectedNode.group].bg }}>
                    {CLASS_COLORS[selectedNode.group].name}
                  </span>
                </div>
                <button
                  onClick={() => handleSelectNode(null)}
                  className="rounded p-1 text-stone-400 hover:bg-red-900/40 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Title & Role */}
              <div className="mt-3">
                <h4 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
                  {selectedNode.label}
                  <span className="text-xs font-normal text-amber-500/80">({selectedNode.group})</span>
                </h4>
                {(selectedNode.role || selectedNode.subType) && (
                  <p className="mt-1 text-xs text-amber-400/90 font-medium">
                    {selectedNode.role || selectedNode.subType}
                  </p>
                )}
                {selectedNode.description && (
                  <p className="mt-2.5 text-xs leading-relaxed text-stone-300/90 bg-black/30 p-2.5 rounded-lg border border-red-950">
                    {selectedNode.description}
                  </p>
                )}
              </div>

              {/* Connected Relationships list */}
              <div className="mt-4">
                <h5 className="flex items-center gap-1.5 text-xs font-semibold text-amber-300/90 uppercase tracking-wider">
                  <Layers className="h-3.5 w-3.5 text-amber-500" />
                  연결된 관계 ({selectedNodeEdges.length})
                </h5>
                <div className="mt-2 max-h-48 space-y-1.5 overflow-y-auto pr-1">
                  {selectedNodeEdges.length === 0 ? (
                    <p className="text-xs text-stone-500">연결된 엣지가 없습니다.</p>
                  ) : (
                    selectedNodeEdges.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-red-950 bg-black/40 p-2 text-xs flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-1.5 overflow-hidden">
                          <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-900/40">
                            {item.edge.label}
                          </span>
                          <span className="text-stone-300 truncate">
                            {item.direction === 'outgoing' ? `➔ ${item.otherNodeName}` : `⬅ ${item.otherNodeName}`}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Cypher Query Sample for this Node */}
            <div className="mt-4 border-t border-red-900/40 pt-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-semibold text-amber-400/80 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Cypher Query
                </span>
                <button
                  onClick={() => copyCypher(`MATCH (n:${selectedNode.group} {name: '${selectedNode.id}'})-[r]-(m) RETURN n, r, m;`)}
                  className="flex items-center gap-1 text-[10px] text-amber-400 hover:text-amber-200"
                >
                  {copiedCypher ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  {copiedCypher ? '복사됨' : '복사'}
                </button>
              </div>
              <pre className="rounded bg-black/80 p-2 text-[10px] font-mono text-amber-200/90 overflow-x-auto border border-red-950">
{`MATCH (n:${selectedNode.group} {name: '${selectedNode.id}'})-[r]-(m) 
RETURN n, r, m LIMIT 25;`}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info Notice */}
      <div className="flex flex-wrap items-center justify-between border-t border-red-900/30 bg-[#12060a] px-4 py-2.5 text-[11px] text-stone-400">
        <div className="flex items-center gap-2">
          <Info className="h-3.5 w-3.5 text-amber-500/80" />
          <span>노드를 드래그하여 배치하거나, 클릭하여 세부 인스펙터 및 Cypher 쿼리를 확인할 수 있습니다.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-amber-500/80">마우스 휠: 줌 인/아웃</span>
        </div>
      </div>
    </div>
  );
};
