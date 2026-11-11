import React, { useState } from 'react';
import { 
  Briefcase, 
  BookOpen, 
  Sparkles, 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

export const CareerArchive: React.FC = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 4000);
  };

  return (
    <div className="w-full space-y-12">
      {/* 1. About Me & Technical Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-red-900/40 bg-gradient-to-br from-[#18070e] via-[#110408] to-[#0a0205] p-6 sm:p-8 shadow-2xl">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 px-3 py-1 text-xs font-medium text-amber-300">
            <Briefcase className="h-3 w-3" />
            <span>Data Engineer & Knowledge Graph Architect</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
            복잡한 서사와 비정형 데이터를 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-500">
              구조화된 시맨틱 네트워크
            </span>로 시각화합니다.
          </h3>

          <p className="text-sm leading-relaxed text-stone-300/90">
            소설, 영화, 대규모 도메인 텍스트에서 개체명(NER) 및 상호 관계를 추출하고 온톨로지를 설계하여 Neo4j 및 Graph Database로 적재합니다. 나아가 LLM과의 시너지를 극대화하는 GraphRAG 아키텍처를 구현하여 복합 추론과 정확한 지식 전달을 연구하고 있습니다.
          </p>

          {/* Tech Stack Badges */}
          <div className="pt-2">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-400/80 mb-2.5">
              보유 기술 스택 및 엔지니어링 역량
            </h5>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Neo4j & Cypher', level: 'Expert', color: 'border-red-800 bg-red-950/40 text-amber-200' },
                { name: 'Knowledge Graph & Ontology Modeling', level: 'Core', color: 'border-amber-800 bg-amber-950/40 text-amber-300' },
                { name: 'GraphRAG & LLM Integration', level: 'Advanced', color: 'border-cyan-800 bg-cyan-950/40 text-cyan-200' },
                { name: 'Python (Spacy, NetworkX)', level: 'Skilled', color: 'border-emerald-800 bg-emerald-950/40 text-emerald-200' },
                { name: 'vis-network & D3.js', level: 'Interactive UI', color: 'border-purple-800 bg-purple-950/40 text-purple-200' },
                { name: 'TypeScript & Modern React', level: 'Production', color: 'border-stone-700 bg-stone-900/60 text-stone-200' }
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className={`rounded-lg border px-3 py-1 text-xs font-medium ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 rounded-xl border border-red-900/40 bg-[#0e0307]/80 p-5 space-y-4">
          <h4 className="font-serif text-base font-bold text-amber-200 border-b border-red-950 pb-2 flex items-center justify-between">
            <span>엔지니어 프로필 요약</span>
            <span className="text-xs font-normal text-stone-400">Team Korea Univ.</span>
          </h4>
          
          <ul className="space-y-2.5 text-xs text-stone-300">
            <li className="flex items-center justify-between">
              <span className="text-stone-400">학력 / 전공:</span>
              <span className="font-medium text-amber-100">고려대학교 (Korea University)</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-stone-400">연구 분야:</span>
              <span className="font-medium text-amber-100">지식그래프, 온톨로지, 서사 분석</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-stone-400">깃허브:</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="font-medium text-amber-400 hover:underline flex items-center gap-1"
              >
                github.com/archive <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-stone-400">이메일:</span>
              <span className="font-medium text-amber-100">woosy0813@korea.ac.kr</span>
            </li>
          </ul>

          <div className="rounded-lg bg-red-950/30 p-3 border border-red-900/30">
            <p className="text-[11px] leading-relaxed text-amber-200/90">
              💡 <strong>기대효과:</strong> 문학 작품의 비정형 텍스트를 정형 그래프로 변환하여 
              정량적 중심성 및 서사 구조를 분석하고, 후속 시리즈 확장을 지원하는 범용 스키마를 수립했습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Project Archive (Expandable Card Grid) */}
      <div>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h4 className="font-serif text-2xl font-bold text-amber-100 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-amber-500" />
              지식그래프 프로젝트 아카이브 (Project Roadmap)
            </h4>
            <p className="text-xs text-stone-400 mt-1">
              단계별 지식 확장 및 연구 로드맵 — 신규 프로젝트 카드를 유연하게 증설할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Completed */}
          <div className="flex flex-col justify-between rounded-xl border border-amber-600/60 bg-gradient-to-b from-[#200913] to-[#110408] p-5 shadow-xl transition-all hover:-translate-y-1 hover:border-amber-400">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-950/60 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 border border-emerald-800">
                  ✓ 구축 완료 (Live)
                </span>
                <span className="font-mono text-xs text-stone-400">2026.09 - 12 (10주)</span>
              </div>
              <h5 className="mt-3 font-serif text-lg font-bold text-amber-100">
                &lt;해리 포터와 마법사의 돌&gt; 지식그래프
              </h5>
              <p className="mt-2 text-xs leading-relaxed text-stone-300">
                1편 중심의 83개+ 노드 및 13종 시맨틱 관계 모델링. 마법사의 돌 방어 체계와 해리의 적대 구도를 Neo4j & vis-network로 완벽 시각화.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] bg-black/40 text-amber-300 px-2 py-0.5 rounded border border-red-950">Neo4j</span>
                <span className="text-[10px] bg-black/40 text-amber-300 px-2 py-0.5 rounded border border-red-950">Cypher</span>
                <span className="text-[10px] bg-black/40 text-amber-300 px-2 py-0.5 rounded border border-red-950">vis-network</span>
              </div>
            </div>
            <div className="mt-5 border-t border-red-900/40 pt-3 flex items-center justify-between text-xs text-amber-400 font-medium">
              <span>현재 배포된 포트폴리오</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            </div>
          </div>

          {/* Card 2: Next Planned */}
          <div className="flex flex-col justify-between rounded-xl border border-red-900/40 bg-gradient-to-b from-[#16060c] to-[#0c0306] p-5 shadow-xl transition-all hover:border-red-700">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-950/60 px-2.5 py-0.5 text-[11px] font-semibold text-amber-300 border border-amber-800">
                  Next 시리즈 예정
                </span>
                <span className="font-mono text-xs text-stone-400">2027 Q1</span>
              </div>
              <h5 className="mt-3 font-serif text-lg font-bold text-amber-200/90">
                &lt;해리 포터와 비밀의 방&gt; 온톨로지 확장
              </h5>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">
                바실리스크, 톰 리들의 일기장(호크룩스), 살라자르 슬리데린의 혈통 온톨로지 확장 구축. 50+ 신규 사건 및 비밀 통로 공간 모델링.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] bg-black/40 text-stone-400 px-2 py-0.5 rounded border border-red-950">Ontology Expansion</span>
                <span className="text-[10px] bg-black/40 text-stone-400 px-2 py-0.5 rounded border border-red-950">Temporal Event Graph</span>
              </div>
            </div>
            <div className="mt-5 border-t border-red-950 pt-3 flex items-center justify-between text-xs text-stone-400">
              <span>스키마 호환 설계 완료</span>
              <ArrowUpRight className="h-4 w-4 text-stone-500" />
            </div>
          </div>

          {/* Card 3: AI Research */}
          <div className="flex flex-col justify-between rounded-xl border border-red-900/40 bg-gradient-to-b from-[#16060c] to-[#0c0306] p-5 shadow-xl transition-all hover:border-red-700">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-purple-950/60 px-2.5 py-0.5 text-[11px] font-semibold text-purple-300 border border-purple-800">
                  R&D 리서치 예정
                </span>
                <span className="font-mono text-xs text-stone-400">2027 Q2</span>
              </div>
              <h5 className="mt-3 font-serif text-lg font-bold text-amber-200/90">
                GraphRAG 기반 호그와트 질의응답 엔진
              </h5>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">
                Neo4j 그래프와 LLM 임베딩을 결합하여 환각(Hallucination) 없이 복합 다중 홉 서사 질문에 정확히 답변하는 대화형 질의응답 챗봇 시스템.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] bg-black/40 text-stone-400 px-2 py-0.5 rounded border border-red-950">GraphRAG</span>
                <span className="text-[10px] bg-black/40 text-stone-400 px-2 py-0.5 rounded border border-red-950">LLM Reasoning</span>
                <span className="text-[10px] bg-black/40 text-stone-400 px-2 py-0.5 rounded border border-red-950">Multi-Hop QA</span>
              </div>
            </div>
            <div className="mt-5 border-t border-red-950 pt-3 flex items-center justify-between text-xs text-stone-400">
              <span>프로토타입 기획 중</span>
              <ArrowUpRight className="h-4 w-4 text-stone-500" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Contact & Collaboration Form */}
      <div id="contact" className="rounded-2xl border border-red-900/40 bg-[#14050a]/90 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 px-3 py-1 text-xs font-medium text-amber-300">
            <Mail className="h-3 w-3" />
            <span>Contact & Collaboration</span>
          </div>
          <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-amber-100">
            지식그래프 구축 및 데이터 협업 문의
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-400">
            프로젝트 피드백, 지식그래프 모델링, GraphRAG 공동 연구 제안을 언제든 환영합니다.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-emerald-700 bg-emerald-950/40 p-6 text-emerald-200">
              <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-400 mb-2" />
              <h5 className="font-bold text-base">메시지가 성공적으로 전달되었습니다!</h5>
              <p className="text-xs text-emerald-300/80 mt-1">확인 후 신속히 기재해 주신 메일로 회신드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-amber-200/80 mb-1">성함 / 기관명</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동 (데이터랩)"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    className="w-full rounded-lg border border-red-950 bg-black/60 px-3 py-2 text-xs text-amber-100 placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-amber-200/80 mb-1">회신 이메일</label>
                  <input
                    type="email"
                    required
                    placeholder="your-email@domain.com"
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                    className="w-full rounded-lg border border-red-950 bg-black/60 px-3 py-2 text-xs text-amber-100 placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-amber-200/80 mb-1">문의 및 제안 내용</label>
                <textarea
                  rows={4}
                  required
                  placeholder="지식그래프 아키텍처 제안, 기술 협업, 질의사항 등을 적어주세요."
                  value={contactMessage}
                  onChange={e => setContactMessage(e.target.value)}
                  className="w-full rounded-lg border border-red-950 bg-black/60 px-3 py-2 text-xs text-amber-100 placeholder-stone-600 focus:border-amber-500 focus:outline-none resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-600/70 bg-gradient-to-r from-red-800 to-amber-700 px-6 py-2.5 text-xs font-bold text-amber-100 shadow-lg shadow-red-950 hover:from-red-700 hover:to-amber-600 transition-all cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>문의 메시지 발송하기</span>
                </button>
              </div>
            </form>
          )}

          {/* Social Links */}
          <div className="mt-8 flex items-center justify-center gap-6 border-t border-red-950/80 pt-6">
            <a
              href="mailto:woosy0813@korea.ac.kr"
              className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-300 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>woosy0813@korea.ac.kr</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
