import React, { useState } from 'react';
import { KEY_QUESTIONS } from '../data/graphData';
import { 
  HelpCircle, 
  Code, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight, 
  Layers, 
  Database,
  Eye
} from 'lucide-react';

interface KeyQuestionsProps {
  onHighlightNodes: (nodeIds: string[]) => void;
}

export const KeyQuestions: React.FC<KeyQuestionsProps> = ({ onHighlightNodes }) => {
  const [activeTab, setActiveTab] = useState<'Q1' | 'Q2' | 'Q3'>('Q1');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeQuestion = KEY_QUESTIONS.find(q => q.id === activeTab)!;

  const copyCode = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleApplyToGraph = (nodeIds: string[]) => {
    onHighlightNodes(nodeIds);
    // Smooth scroll to graph section
    const graphElement = document.getElementById('knowledge-graph');
    if (graphElement) {
      graphElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full">
      {/* Question Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-red-900/40 pb-4">
        {KEY_QUESTIONS.map(q => {
          const isActive = q.id === activeTab;
          return (
            <button
              key={q.id}
              onClick={() => setActiveTab(q.id as any)}
              className={`group flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? 'border border-amber-500/60 bg-gradient-to-r from-red-950/80 via-red-900/40 to-black text-amber-200 shadow-lg shadow-red-950/50'
                  : 'border border-red-950/60 bg-black/40 text-stone-400 hover:border-red-900/40 hover:text-stone-200'
              }`}
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-md font-mono text-xs font-bold ${
                isActive ? 'bg-amber-500 text-stone-950' : 'bg-red-950/60 text-amber-400/80 group-hover:bg-red-900/40'
              }`}>
                {q.id}
              </span>
              <span className="font-serif tracking-wide">{q.id}. {q.title.split('. ')[1] || q.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Question Display Card */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 rounded-2xl border border-red-900/40 bg-[#14060c]/85 p-6 shadow-2xl backdrop-blur-md">
        {/* Left Side: Context & Narrative Insight */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 px-3 py-1 text-xs font-medium text-amber-300">
              <Sparkles className="h-3 w-3" />
              <span>{activeQuestion.subtitle}</span>
            </div>

            <h3 className="mt-3 font-serif text-2xl font-bold text-amber-100 leading-snug">
              {activeQuestion.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-stone-300/90">
              {activeQuestion.desc}
            </p>

            {/* Analysis Insight Box */}
            <div className="mt-4 rounded-xl border border-red-900/30 bg-black/40 p-4">
              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Database className="h-3.5 w-3.5 text-amber-500" />
                지식그래프 서사 분석 인사이트
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-amber-100/80">
                {activeQuestion.insight}
              </p>
            </div>
          </div>

          {/* Action button: Filter graph to this question */}
          <div className="pt-2">
            <button
              onClick={() => handleApplyToGraph(activeQuestion.highlightNodes)}
              className="flex items-center gap-2 rounded-xl border border-amber-600/60 bg-gradient-to-r from-red-900 to-red-800 px-4 py-2.5 text-xs font-semibold text-amber-100 shadow-md shadow-red-950 hover:border-amber-400 hover:from-red-800 hover:to-red-700 transition-all"
            >
              <Eye className="h-4 w-4 text-amber-300" />
              <span>그래프 탐색기에서 관련 노드 하이라이트 ({activeQuestion.highlightNodes.length}개)</span>
              <ArrowRight className="h-3.5 w-3.5 text-amber-300" />
            </button>
          </div>
        </div>

        {/* Right Side: Cypher Query Code Block */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center justify-between rounded-t-xl border-t border-l border-r border-red-900/50 bg-[#1c0810] px-4 py-2.5 text-xs">
            <div className="flex items-center gap-2 text-amber-200/90 font-mono">
              <Code className="h-3.5 w-3.5 text-amber-400" />
              <span>Cypher Query ({activeQuestion.id})</span>
            </div>
            <button
              onClick={() => copyCode(activeQuestion.id, activeQuestion.cypher)}
              className="flex items-center gap-1 rounded bg-black/50 px-2 py-1 text-[11px] text-stone-300 hover:bg-amber-950 hover:text-amber-200 transition-colors border border-red-950"
            >
              {copiedId === activeQuestion.id ? (
                <>
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-400">복사 완료</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>쿼리 복사</span>
                </>
              )}
            </button>
          </div>

          <div className="flex-1 rounded-b-xl border border-red-900/50 bg-[#090204] p-4 font-mono text-xs text-amber-100/90 overflow-x-auto shadow-inner">
            <pre className="leading-relaxed">
              <code>
                {activeQuestion.cypher.split('\n').map((line, idx) => {
                  if (line.startsWith('//')) {
                    return <span key={idx} className="text-stone-500 italic block">{line}</span>;
                  }
                  if (line.includes('MATCH') || line.includes('OPTIONAL') || line.includes('RETURN') || line.includes('ORDER BY')) {
                    const parts = line.split(/(MATCH|OPTIONAL|RETURN|ORDER BY|WHERE|MERGE)/g);
                    return (
                      <span key={idx} className="block">
                        {parts.map((p, i) => {
                          if (['MATCH', 'OPTIONAL', 'RETURN', 'ORDER BY', 'WHERE', 'MERGE'].includes(p)) {
                            return <strong key={i} className="text-red-400 font-bold">{p}</strong>;
                          }
                          return <span key={i} className="text-amber-200/80">{p}</span>;
                        })}
                      </span>
                    );
                  }
                  return <span key={idx} className="block text-amber-200/80">{line}</span>;
                })}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
