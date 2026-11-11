import React, { useState } from 'react';
import { NetworkGraph } from './components/NetworkGraph';
import { KeyQuestions } from './components/KeyQuestions';
import { DataModelSchema } from './components/DataModelSchema';
import { CareerArchive } from './components/CareerArchive';
import { GraphNode } from './data/graphData';
import { 
  Network, 
  Sparkles, 
  BookOpen, 
  Database, 
  Layers, 
  HelpCircle, 
  ExternalLink, 
  Github, 
  Download, 
  ChevronRight,
  Shield,
  Clock,
  Compass,
  FileCode2,
  Share2,
  Check
} from 'lucide-react';

export default function App() {
  const [highlightedNodes, setHighlightedNodes] = useState<string[]>([]);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleDownloadReport = () => {
    // Generate a downloadable markdown summary
    const content = `# 해리 포터와 마법사의 돌 서사 지식그래프 프로젝트 최종 보고서 요약
추진 기간: 2026.09 ~ 2026.12 (10주)
소속: 고려대학교 (Korea University)
기술 스택: Neo4j, Cypher, vis-network, TypeScript, React

## 1. 프로젝트 목적
<해리 포터와 마법사의 돌>의 주요 인물, 장소, 사건, 사물, 집단 간의 관계를 다차원 시맨틱 온톨로지로 설계하여 서사 구조와 중심 메커니즘을 규명함.

## 2. 데이터 지표
- 노드 수: 83개+ (인물 26, 집단 9, 장소 15, 사건 19, 사물 15)
- 엣지 수: 80개+
- 핵심 질문 3선 Cypher 쿼리 구현 완료
`;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Harry_Potter_Knowledge_Graph_Summary.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#090204] text-[#f3ebd7] selection:bg-red-900 selection:text-amber-200">
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 border-b border-red-900/40 bg-[#0d0407]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo / Emblem */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-600/60 bg-gradient-to-br from-red-900 to-amber-950 shadow-md shadow-red-950 transition-transform group-hover:scale-105">
              <Network className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-wider text-amber-100 flex items-center gap-1.5">
                Hogwarts Archive
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-red-950 text-amber-400 border border-red-900/40">
                  KG v1.0
                </span>
              </span>
              <p className="text-[10px] text-stone-400 tracking-tight">Harry Potter Knowledge Graph Portfolio</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-stone-300">
            <a href="#overview" className="hover:text-amber-300 transition-colors">Overview</a>
            <a href="#knowledge-graph" className="hover:text-amber-300 transition-colors">Knowledge Graph</a>
            <a href="#cypher-queries" className="hover:text-amber-300 transition-colors">Cypher Analysis</a>
            <a href="#ontology" className="hover:text-amber-300 transition-colors">Data Schema</a>
            <a href="#career-archive" className="hover:text-amber-300 transition-colors">Career & Archive</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 rounded-lg border border-red-900/50 bg-black/40 px-2.5 py-1.5 text-xs text-stone-300 hover:text-amber-200 transition-colors"
              title="링크 복사"
            >
              {copiedShare ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
              <span className="hidden sm:inline">{copiedShare ? '복사됨' : '공유'}</span>
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-amber-600/50 bg-gradient-to-r from-red-950 to-amber-950 px-3 py-1.5 text-xs font-semibold text-amber-200 shadow-sm hover:border-amber-400 transition-all"
            >
              <Github className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">GitHub Repository</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden border-b border-red-900/30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a0b14] via-[#14050a] to-[#090204] py-16 sm:py-24">
        {/* Glow & Hogwarts aesthetic backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-red-800/10 blur-[120px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-gradient-to-r from-red-950/80 via-black/60 to-red-950/80 px-4 py-1.5 text-xs font-semibold text-amber-300 shadow-lg shadow-red-950 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Data Engineer & Knowledge Graph Architect Portfolio</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-amber-100 leading-tight">
            호그와트의 서사를 해체하는 <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-amber-500">
              Neo4j 기반 지식그래프 아카이브
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-stone-300">
            &lt;해리 포터와 마법사의 돌&gt;의 복합 인물 관계와 5단계 수호 관문, 아이템의 전승과 사건의 인과 구조를 
            <strong> 83개 이상의 노드와 13종 시맨틱 온톨로지</strong>로 설계하여 인터랙티브 네트워크로 시각화했습니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#knowledge-graph"
              className="flex items-center gap-2 rounded-xl border border-amber-500 bg-gradient-to-r from-red-800 via-red-900 to-amber-700 px-6 py-3 text-sm font-bold text-amber-100 shadow-xl shadow-red-950 hover:scale-105 hover:from-red-700 hover:to-amber-600 transition-all"
            >
              <Compass className="h-4 w-4 text-amber-300" />
              <span>지식그래프 탐색기 바로가기</span>
              <ChevronRight className="h-4 w-4 text-amber-300" />
            </a>
            <button
              onClick={handleDownloadReport}
              className="flex items-center gap-2 rounded-xl border border-red-900/60 bg-black/60 px-5 py-3 text-sm font-semibold text-amber-200 hover:bg-red-950/40 hover:border-amber-600/50 transition-all"
            >
              <Download className="h-4 w-4" />
              <span>기획 요약서 다운로드 (.md)</span>
            </button>
          </div>

          {/* Quick Metric Highlights */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="rounded-xl border border-red-950 bg-black/40 p-4 backdrop-blur-sm">
              <span className="block font-serif text-3xl font-bold text-amber-400">83+</span>
              <span className="text-xs text-stone-400 mt-1 block">구축 노드 (Entities)</span>
            </div>
            <div className="rounded-xl border border-red-950 bg-black/40 p-4 backdrop-blur-sm">
              <span className="block font-serif text-3xl font-bold text-red-400">5 Classes</span>
              <span className="text-xs text-stone-400 mt-1 block">온톨로지 범주 (Classes)</span>
            </div>
            <div className="rounded-xl border border-red-950 bg-black/40 p-4 backdrop-blur-sm">
              <span className="block font-serif text-3xl font-bold text-amber-300">13 Types</span>
              <span className="text-xs text-stone-400 mt-1 block">시맨틱 관계 (Relations)</span>
            </div>
            <div className="rounded-xl border border-red-950 bg-black/40 p-4 backdrop-blur-sm">
              <span className="block font-serif text-3xl font-bold text-cyan-400">3 Key Qs</span>
              <span className="text-xs text-stone-400 mt-1 block">Cypher 쿼리 분석 검증</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Executive Summary & Project Overview */}
      <section id="overview" className="py-16 sm:py-20 border-b border-red-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-red-900/40 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                Chapter Ⅰ & Ⅱ · Project Blueprint
              </span>
              <h2 className="mt-1 font-serif text-3xl font-bold text-amber-100">
                프로젝트 개요 (Executive Summary)
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400/90">
              <Clock className="h-3.5 w-3.5" />
              <span>추진 기간: 2026.09 ~ 2026.12 (10주 프로젝트)</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Background & Purpose */}
            <div className="rounded-2xl border border-red-950 bg-[#120409]/80 p-6 shadow-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-950/70 border border-red-800 text-amber-400 mb-4">
                <BookOpen className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-amber-100">추진 배경 및 목적</h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-300">
                &lt;해리 포터와 마법사의 돌&gt;은 인물 간 관계뿐 아니라 기숙사, 장소, 사건, 사물이 정밀하게 얽혀 있는 서사 문학의 백미입니다. 이를 Neo4j 그래프 데이터베이스로 모델링하여 복합 관계와 서사 인과율을 데이터 기반으로 검증합니다.
              </p>
            </div>

            {/* Box 2: Scope & Boundary */}
            <div className="rounded-2xl border border-red-950 bg-[#120409]/80 p-6 shadow-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-950/70 border border-amber-800 text-amber-400 mb-4">
                <Shield className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-amber-100">대상 선정 및 범위 정의</h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-300">
                <strong>포함 범위:</strong> 1편 &lt;마법사의 돌&gt;의 해리 입학부터 돌 사건 해결까지의 주요 인물(26+), 호그와트 4대 기숙사, 주요 5단계 관문 장소 및 사물. <br />
                <strong>제외 범위:</strong> 2~7편 인물 및 일회성 단역, 현실 배우 신상.
              </p>
            </div>

            {/* Box 3: Final Deliverables */}
            <div className="rounded-2xl border border-red-950 bg-[#120409]/80 p-6 shadow-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-950/70 border border-cyan-800 text-cyan-400 mb-4">
                <Database className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-amber-100">최종 산출물 및 기대효과</h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-300">
                Neo4j 그래프 데이터베이스 적재 스크립트, vis-network 기반 실시간 탐색형 웹 아카이브, 그리고 비정형 문학 텍스트를 시맨틱 구조화하여 향후 GraphRAG와 연동 가능한 온톨로지 모델을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Knowledge Graph Explorer */}
      <section id="knowledge-graph" className="py-16 sm:py-20 border-b border-red-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-red-900/40 pb-6 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                Interactive Visualization Module
              </span>
              <h2 className="mt-1 font-serif text-3xl font-bold text-amber-100">
                인터랙티브 지식그래프 탐색기
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-400">
                vis-network 엔진으로 구동되는 실시간 물리 그래프입니다. 노드를 클릭하여 관계를 탐색하거나 상단 필터로 특정 클래스를 분리할 수 있습니다.
              </p>
            </div>
          </div>

          {/* Vis Network Graph Component */}
          <NetworkGraph highlightNodeIds={highlightedNodes} />
        </div>
      </section>

      {/* 5. Key Questions & Cypher Queries */}
      <section id="cypher-queries" className="py-16 sm:py-20 border-b border-red-900/30 bg-[#0e0408]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border-b border-red-900/40 pb-6 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Chapter Ⅲ · Narrative Analysis
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-amber-100">
              핵심 질문 및 Cypher 쿼리 분석
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-400">
              기획안에서 도출한 3대 핵심 질문을 다중 홉(Multi-Hop) Cypher 쿼리로 질의하고 그래프 탐색기와 연동합니다.
            </p>
          </div>

          {/* Key Questions Component */}
          <KeyQuestions onHighlightNodes={setHighlightedNodes} />
        </div>
      </section>

      {/* 6. Data Model & Ontology Specification */}
      <section id="ontology" className="py-16 sm:py-20 border-b border-red-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border-b border-red-900/40 pb-6 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Chapter Ⅳ · Data Modeling
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-amber-100">
              데이터 모델 및 온톨로지 명세
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-400">
              본 프로젝트에 적용된 5대 클래스와 13종 관계 스키마의 정밀 정의서입니다.
            </p>
          </div>

          {/* Data Model Schema Component */}
          <DataModelSchema />
        </div>
      </section>

      {/* 7. Career & Future Archives */}
      <section id="career-archive" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border-b border-red-900/40 pb-6 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Engineering Profile & Expansion
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-amber-100">
              엔지니어 프로필 & 프로젝트 아카이브
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-400">
              보유 기술 역량과 향후 &lt;비밀의 방&gt; 및 GraphRAG 챗봇 연구 로드맵을 확인하실 수 있습니다.
            </p>
          </div>

          {/* Career Archive Component */}
          <CareerArchive />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-950 bg-[#070103] py-8 text-center text-xs text-stone-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-amber-400 font-bold">Hogwarts Knowledge Graph Project</span>
            <span>· 고려대학교 데이터 엔지니어링 포트폴리오</span>
          </div>
          <p className="text-stone-600">
            Powered by Neo4j, Cypher, vis-network, React, Tailwind CSS. Designed for GitHub Pages single-file compatibility.
          </p>
        </div>
      </footer>
    </div>
  );
}
