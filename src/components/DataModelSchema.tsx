import React from 'react';
import { ONTOLOGY_CLASSES, ONTOLOGY_RELATIONS, CLASS_COLORS } from '../data/graphData';
import { Database, GitFork, ShieldCheck, Tag } from 'lucide-react';

export const DataModelSchema: React.FC = () => {
  return (
    <div className="w-full space-y-8">
      {/* 1. Classes Grid */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-amber-100">
            <Tag className="h-4 w-4 text-amber-500" />
            온톨로지 클래스 정의 (5개 노드 범주)
          </h4>
          <span className="text-xs text-stone-400">총 83개+ 노드 스키마</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ONTOLOGY_CLASSES.map((cls, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-red-950/70 bg-[#14060c]/80 p-4 transition-all hover:border-red-900/60 hover:bg-[#1a0810]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: cls.color }}
                  />
                  <h5 className="font-serif text-base font-bold text-amber-100">{cls.name}</h5>
                </div>
                <span className="rounded-md bg-black/40 px-2 py-0.5 font-mono text-xs text-amber-400 border border-red-950">
                  {cls.count}
                </span>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-stone-300">
                {cls.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Relationships Table */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-amber-100">
            <GitFork className="h-4 w-4 text-amber-500" />
            주요 관계 (Edge) 온톨로지 명세
          </h4>
          <span className="text-xs text-stone-400">13종 핵심 시맨틱 릴레이션</span>
        </div>

        <div className="overflow-hidden rounded-xl border border-red-900/40 bg-[#12050a]/90 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-red-900/50 bg-[#1c0810] font-mono uppercase text-amber-300">
                <tr>
                  <th className="px-4 py-3">관계명 (Relationship)</th>
                  <th className="px-4 py-3">시작 클래스 (Source)</th>
                  <th className="px-4 py-3">도착 클래스 (Target)</th>
                  <th className="px-4 py-3">의미 및 서사적 해석 (Semantics)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-950/60 font-sans text-stone-300">
                {ONTOLOGY_RELATIONS.map((rel, idx) => (
                  <tr key={idx} className="hover:bg-red-950/20 transition-colors">
                    <td className="px-4 py-3 font-mono font-bold text-amber-400">
                      :{rel.name}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block rounded bg-black/50 px-2 py-0.5 text-stone-300 border border-red-950">
                        {rel.start}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block rounded bg-black/50 px-2 py-0.5 text-stone-300 border border-red-950">
                        {rel.end}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-stone-300/90 leading-relaxed">
                      {rel.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
