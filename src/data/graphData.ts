export interface GraphNode {
  id: string;
  label: string;
  group: 'person' | 'group' | 'place' | 'event' | 'object';
  description?: string;
  role?: string;
  subType?: string;
}

export interface GraphEdge {
  from: string;
  to: string;
  label: string;
  cypher?: string;
  description?: string;
}

export const CLASS_COLORS = {
  person: {
    bg: '#ef4444',
    border: '#b91c1c',
    glow: 'rgba(239, 68, 68, 0.45)',
    name: '인물 (Person)',
    kr: '인물',
    hex: '#ef4444'
  },
  group: {
    bg: '#f59e0b',
    border: '#d97706',
    glow: 'rgba(245, 158, 11, 0.45)',
    name: '집단 (Group)',
    kr: '집단',
    hex: '#f59e0b'
  },
  place: {
    bg: '#10b981',
    border: '#059669',
    glow: 'rgba(16, 185, 129, 0.45)',
    name: '장소 (Place)',
    kr: '장소',
    hex: '#10b981'
  },
  event: {
    bg: '#8b5cf6',
    border: '#7c3aed',
    glow: 'rgba(139, 92, 246, 0.45)',
    name: '사건 (Event)',
    kr: '사건',
    hex: '#8b5cf6'
  },
  object: {
    bg: '#06b6d4',
    border: '#0891b2',
    glow: 'rgba(6, 182, 212, 0.45)',
    name: '사물 (Object)',
    kr: '사물',
    hex: '#06b6d4'
  }
} as const;

export const GRAPH_NODES: GraphNode[] = [
  // Person
  { id: '해리 포터', label: '해리 포터', group: 'person', role: '주인공 / 그리핀도르', description: '마법 세계를 구할 운명을 지닌 소년. 볼드모트의 저주에서 살아남은 유일한 마법사.' },
  { id: '론 위즐리', label: '론 위즐리', group: 'person', role: '조력자 / 그리핀도르', description: '해리의 절친한 친구이자 위즐리 가문의 막내아들. 마법사 체스에서 탁월한 전략을 선보임.' },
  { id: '헤르미온느 그레인저', label: '헤르미온느 그레인저', group: 'person', role: '조력자 / 그리핀도르', description: '가장 명석하고 뛰어난 지식을 가진 친구. 악마의 덫을 불로 해결하고 스네이프의 의심을 품음.' },
  { id: '드레이코 말포이', label: '드레이코 말포이', group: 'person', role: '적대자 / 슬리데린', description: '순수혈통 말포이 가문의 후계자이자 해리의 라이벌. 슬리데린 기숙사 소속.' },
  { id: '세베루스 스네이프', label: '세베루스 스네이프', group: 'person', role: '교수 및 보호자 / 슬리데린', description: '마법약 교수이자 슬리데린 사감. 의심받으나 실은 퀴렐의 저주로부터 해리를 보호함.' },
  { id: '볼드모트 경', label: '볼드모트 경', group: 'person', role: '최종 적대자 / 어둠의 마법사', description: '마법사의 돌을 차지해 영생을 얻으려는 어둠의 군주. 퀴렐 교수의 터번 뒤에 기생함.' },
  { id: '알버스 덤블도어', label: '알버스 덤블도어', group: 'person', role: '호그와트 교장', description: '20세기 최고의 마법사이자 해리의 든든한 조력자 및 호그와트의 지도자.' },
  { id: '루베우스 해그리드', label: '루베우스 해그리드', group: 'person', role: '사냥터지기 / 조력자', description: '해리를 머글 세계에서 데려왔으며, 플러피의 주인이자 마법 세계의 비밀을 공유함.' },
  { id: '퀴리누스 퀴렐', label: '퀴리누스 퀴렐', group: 'person', role: '어둠의 마법 방어술 교수', description: '어둠의 마법 방어술 교수이자 볼드모트를 자신의 몸에 빙의시킨 공범.' },
  { id: '네빌 롱바텀', label: '네빌 롱바텀', group: 'person', role: '그리핀도르 학생', description: '서툴지만 친구들을 막아서는 용기를 인정받아 호그와트 우승컵 결정적 점수를 획득함.' },
  { id: '미네르바 맥고나걸', label: '미네르바 맥고나걸', group: 'person', role: '변신술 교수 / 그리핀도르 사감', description: '해리의 비행 재능을 보고 님부스 2000을 하사하며 퀴디치 수색꾼으로 발탁함.' },
  { id: '올리버 우드', label: '올리버 우드', group: 'person', role: '그리핀도르 퀴디치 주장', description: '그리핀도르 퀴디치 팀의 주장 겸 파수꾼.' },
  { id: '프레드 위즐리', label: '프레드 위즐리', group: 'person', role: '위즐리 가문 / 몰이꾼', description: '론의 형, 그리핀도르 퀴디치 팀 몰이꾼이자 장난기 넘치는 쌍둥이.' },
  { id: '조지 위즐리', label: '조지 위즐리', group: 'person', role: '위즐리 가문 / 몰이꾼', description: '론의 형, 그리핀도르 퀴디치 팀 몰이꾼이자 장난기 넘치는 쌍둥이.' },
  { id: '퍼시 위즐리', label: '퍼시 위즐리', group: 'person', role: '위즐리 가문 / 반장', description: '그리핀도르의 규율을 중시하는 반장.' },
  { id: '몰리 위즐리', label: '몰리 위즐리', group: 'person', role: '위즐리 가문 어머니', description: '9와 4분의 3 승강장에서 길을 잃은 해리에게 플랫폼 진입 방법을 알려준 따뜻한 어머니.' },
  { id: '버논 더즐리', label: '버논 더즐리', group: 'person', role: '이모부 / 머글', description: '해리의 이모부. 마법 세계의 존재를 결사적으로 숨기려 함.' },
  { id: '페투니아 더즐리', label: '페투니아 더즐리', group: 'person', role: '이모 / 머글', description: '릴리 포터의 언니이자 해리의 이모.' },
  { id: '두들리 더즐리', label: '두들리 더즐리', group: 'person', role: '사촌 / 머글', description: '해리의 제멋대로인 사촌 형제.' },
  { id: '개릭 올리반더', label: '개릭 올리반더', group: 'person', role: '지팡이 장인', description: '다이애건 앨리에서 해리에게 서양호랑가시나무 지팡이를 건넨 명장.' },
  { id: '아구스 필치', label: '아구스 필치', group: 'person', role: '호그와트 관리인', description: '밤마다 복도를 순찰하며 학생들을 적발하는 스큅 관리인.' },
  { id: '로란다 후치', label: '로란다 후치', group: 'person', role: '비행 수업 교수 / 심판', description: '호그와트 1학년 비행 수업 담당 및 퀴디치 경기 심판.' },
  { id: '필리우스 플리트윅', label: '필리우스 플리트윅', group: 'person', role: '마법 교수 / 래번클로 사감', description: '윙가르디움 레비오우사 주문을 가르친 호그와트 교수.' },
  { id: '빈센트 크랩', label: '빈센트 크랩', group: 'person', role: '슬리데린 학생', description: '말포이의 추종자이자 힘잡이.' },
  { id: '그레고리 고일', label: '그레고리 고일', group: 'person', role: '슬리데린 학생', description: '말포이의 추종자.' },
  { id: '목이 달랑달랑한 닉', label: '목이 달랑달랑한 닉', group: 'person', role: '그리핀도르 유령', description: '그리핀도르 탑의 친근한 유령.' },

  // Group
  { id: '그리핀도르', label: '그리핀도르', group: 'group', subType: '기숙사', description: '용기와 대담함을 기리는 호그와트 4대 기숙사 중 하나.' },
  { id: '슬리데린', label: '슬리데린', group: 'group', subType: '기숙사', description: '야망과 지략을 중시하는 기숙사.' },
  { id: '래번클로', label: '래번클로', group: 'group', subType: '기숙사', description: '지혜와 총명함을 상징하는 기숙사.' },
  { id: '후플푸프', label: '후플푸프', group: 'group', subType: '기숙사', description: '정직과 성실, 공정함을 중시하는 기숙사.' },
  { id: '호그와트 교수진', label: '호그와트 교수진', group: 'group', subType: '조직/단체', description: '덤블도어, 맥고나걸, 스네이프 등 학교를 이끄는 마법 교수 집단.' },
  { id: '더즐리 가족', label: '더즐리 가족', group: 'group', subType: '가문/가족', description: '프리벳가 4번지의 머글 가족.' },
  { id: '위즐리 가문', label: '위즐리 가문', group: 'group', subType: '마법사 가문', description: '빨간 머리의 유서 깊은 순수혈통 친머글 마법사 가문.' },
  { id: '그리핀도르 퀴디치 팀', label: '그리핀도르 퀴디치 팀', group: 'group', subType: '운동 팀', description: '올리버 우드가 이끌고 해리가 수색꾼으로 활약한 퀴디치 팀.' },
  { id: '슬리데린 퀴디치 팀', label: '슬리데린 퀴디치 팀', group: 'group', subType: '운동 팀', description: '그리핀도르의 숙명의 라이벌 퀴디치 팀.' },

  // Place
  { id: '호그와트', label: '호그와트', group: 'place', subType: '성/학교', description: '마법사들을 육성하는 스코틀랜드의 웅장한 마법 성채.' },
  { id: '3층 금지 복도', label: '3층 금지 복도', group: 'place', subType: '복도', description: '고통스러운 죽음을 맞고 싶지 않다면 접근하지 말라는 덤블도어의 경고가 내려진 구역.' },
  { id: '플러피가 있는 방', label: '플러피가 있는 방', group: 'place', subType: '방', description: '머리 셋 달린 개 플러피가 트랩도어를 지키고 있는 잠긴 방.' },
  { id: '악마의 덫이 있는 공간', label: '악마의 덫 공간', group: 'place', subType: '지하 공간', description: '트랩도어 아래로 떨어지면 얽혀드는 식물이 지키는 지하 관문.' },
  { id: '날개 달린 열쇠의 방', label: '날개 달린 열쇠의 방', group: 'place', subType: '방', description: '올바른 은색 낡은 열쇠를 빗자루로 추격해야 통과할 수 있는 시험장.' },
  { id: '마법사 체스의 방', label: '마법사 체스의 방', group: 'place', subType: '방', description: '살아 움직이는 거대한 체스 말들과 목숨을 건 승부를 벌이는 공간.' },
  { id: '최종 대결의 방', label: '최종 대결의 방', group: 'place', subType: '최종 공간', description: '소망의 거울과 마법사의 돌, 퀴렐/볼드모트와의 결전이 일어난 지하 방.' },
  { id: '프리벳가 4번지', label: '프리벳가 4번지', group: 'place', subType: '머글 거주지', description: '해리가 계단 밑 벽장에서 어린 시절을 보낸 더즐리 가의 집.' },
  { id: '다이애건 앨리', label: '다이애건 앨리', group: 'place', subType: '상점가', description: '지팡이, 마법 서적, 빗자루 등 마법사들의 도심 번화가.' },
  { id: '그린고츠 은행', label: '그린고츠 은행', group: 'place', subType: '은행', description: '고블린들이 운영하는 세계에서 가장 안전한 마법사 은행.' },
  { id: '713번 금고', label: '713번 금고', group: 'place', subType: '특수 금고', description: '해그리드가 마법사의 돌을 호그와트로 회수하기 위해 방문한 비밀 금고.' },
  { id: '9와 4분의 3 승강장', label: '9와 4분의 3 승강장', group: 'place', subType: '기차역 승강장', description: '킹스크로스역 9번과 10번 플랫폼 벽돌 기둥 사이에 숨겨진 마법 승강장.' },
  { id: '퀴디치 경기장', label: '퀴디치 경기장', group: 'place', subType: '경기장', description: '호그와트 기숙사 간 퀴디치 대항전이 열리는 높은 타워 경기장.' },
  { id: '금지된 숲', label: '금지된 숲', group: 'place', subType: '위험 지역', description: '유니콘, 켄타우로스 등 위험하고 신비한 생물들이 서식하는 숲.' },
  { id: '해그리드의 오두막', label: '해그리드의 오두막', group: 'place', subType: '오두막', description: '성 바깥 숲 가장자리에 있는 해그리드의 따뜻한 거처.' },

  // Event
  { id: 'Harry Is Left at Privet Drive', label: '프리벳가에 맡겨진 해리', group: 'event', subType: '오프닝 사건', description: '볼드모트의 몰락 직후 덤블도어, 맥고나걸, 해그리드가 아기 해리를 이모네 문앞에 맡김.' },
  { id: 'The Hogwarts Letter Incident', label: '호그와트 입학 편지 소동', group: 'event', subType: '초반 사건', description: '수천 통의 호그와트 입학 편지가 굴뚝을 통해 쏟아지자 버논이 피신함.' },
  { id: 'Hagrid Tells Harry About Hogwarts', label: '해그리드의 방문과 진실 고백', group: 'event', subType: '초반 사건', description: '해그리드가 폭풍우 치는 바위섬 오두막을 부수고 들어와 해리가 마법사임을 알림.' },
  { id: 'The Retrieval from Vault 713', label: '713번 금고 회수 작전', group: 'event', subType: '보물 회수', description: '해그리드가 덤블도어의 명을 받아 그린고츠 713번 금고에서 갈색 소포를 꺼냄.' },
  { id: 'Harry Chooses His Wand', label: '지팡이의 선택', group: 'event', subType: '구매/선택', description: '올리반더 가게에서 볼드모트 지팡이와 불사조 깃털 쌍둥이인 호랑가시나무 지팡이가 해리를 선택함.' },
  { id: 'Harry Enters Platform Nine and Three-Quarters', label: '9와 4분의 3 승강장 진입', group: 'event', subType: '출발', description: '몰리 위즐리의 도움을 받아 벽돌 기둥을 통과하고 론과 처음 마주침.' },
  { id: 'Harry and Ron Meet', label: '해리와 론의 첫 만남', group: 'event', subType: '만남', description: '호그와트 급행열차에서 온갖 맛이 나는 젤리와 개구리 초콜릿을 나누며 우정을 맺음.' },
  { id: 'The Sorting Ceremony', label: '기숙사 배정식', group: 'event', subType: '의식', description: '분류 모자가 해리의 희망을 반영하여 그리핀도르로 배정함.' },
  { id: 'The Halloween Troll Incident', label: '할로윈 트롤 침입 사건', group: 'event', subType: '위기 사건', description: '지하감옥에 들어온 거대 트롤을 해리와 론이 처치하며 삼총사의 우정이 완성됨.' },
  { id: 'Gryffindor vs. Slytherin Quidditch Match', label: '그리핀도르 vs 슬리데린 퀴디치전', group: 'event', subType: '스포츠 결전', description: '퀴렐의 저주로 빗자루가 흔들렸으나 해리가 스니치를 입으로 잡아 승리함.' },
  { id: 'Fluffy Chamber Encounter', label: '플러피의 방 잠입', group: 'event', subType: '돌 탐색', description: '투명 망토를 두르고 3층 금지 복도로 들어가 음악으로 잠든 플러피를 지나침.' },
  { id: 'Devil\'s Snare Chamber', label: '악마의 덫 탈출', group: 'event', subType: '관문 통과', description: '헤르미온느가 루모스 솔렘(햇빛) 마법으로 얽혀드는 악마의 덫을 풀어냄.' },
  { id: 'Flying Keys Chamber', label: '날개 달린 열쇠 추격전', group: 'event', subType: '관문 통과', description: '해리가 빗자루를 타고 수백 개의 마법 열쇠 중 날개가 꺾인 낡은 열쇠를 낚아챔.' },
  { id: 'Wizard\'s Chess Chamber', label: '마법사 체스 대결', group: 'event', subType: '관문 통과', description: '론 위즐리가 나이트를 이끌며 전략적 희생을 결단하여 체스 게임을 승리로 이끎.' },
  { id: 'Ron\'s Chess Sacrifice', label: '론의 숭고한 희생', group: 'event', subType: '희생 사건', description: '해리가 체크메이트를 걸 수 있도록 론이 화이트 퀸에게 자신을 희생함.' },
  { id: 'Mirror of Erised Chamber', label: '소망의 거울 방의 진실', group: 'event', subType: '최종 관문', description: '소망의 거울을 들여다본 해리의 주머니 속으로 마법사의 돌이 들어옴.' },
  { id: 'Harry Confronts Quirrell', label: '퀴렐 및 볼드모트와의 최종 대결', group: 'event', subType: '클라이맥스', description: '해리의 어머니의 사랑의 보호 마법으로 인해 퀴렐이 해리의 손길에 부서져 소멸함.' },
  { id: 'The Philosopher\'s Stone Is Destroyed', label: '마법사의 돌 파괴 합의', group: 'event', subType: '에필로그', description: '니콜라스 플라멜과 덤블도어가 상의하여 돌을 파괴하기로 결정함.' },
  { id: 'Gryffindor Wins the House Cup', label: '그리핀도르의 기숙사 우승컵 수상', group: 'event', subType: '수여식', description: '삼총사와 네빌의 용기를 치하하며 덤블도어의 마지막 가산점으로 우승함.' },

  // Object
  { id: '마법사의 돌', label: '마법사의 돌', group: 'object', subType: '전설의 아티팩트', description: '금속을 순금으로 바꾸고 영생의 불로장생 약을 제조할 수 있는 마법 물질.' },
  { id: '투명 망토', label: '투명 망토', group: 'object', subType: '가보/도구', description: '제임스 포터의 유품으로 해리에게 전달된, 완벽히 몸을 숨겨주는 마법 망토.' },
  { id: '님부스 2000', label: '님부스 2000', group: 'object', subType: '비행 빗자루', description: '맥고나걸 교수가 해리의 퀴디치 재능을 보고 특별 선물한 최고급 경주용 빗자루.' },
  { id: '해리의 지팡이', label: '해리의 지팡이', group: 'object', subType: '마법 지팡이', description: '서양호랑가시나무와 불사조 깃털로 만들어진 11인치 지팡이.' },
  { id: '볼드모트의 지팡이', label: '볼드모트의 지팡이', group: 'object', subType: '마법 지팡이', description: '주목나무와 덤블도어의 불사조 폭스의 깃털로 만들어진 형제 지팡이.' },
  { id: '헤드위그', label: '헤드위그', group: 'object', subType: '마법 동물/부엉이', description: '해그리드가 해리의 11번째 생일 선물로 사준 충성스러운 흰올빼미.' },
  { id: '호그와트 입학 편지', label: '호그와트 입학 편지', group: 'object', subType: '양피지 서한', description: '녹색 잉크와 에메랄드 인장으로 봉인된 호그와트 신입생 소환장.' },
  { id: '플러피', label: '플러피', group: 'object', subType: '괴수/경비견', description: '해그리드가 기르는 머리 셋 달린 거대한 사냥개. 음악을 들으면 잠에 빠짐.' },
  { id: '트랩도어', label: '트랩도어', group: 'object', subType: '비밀 출입구', description: '플러피의 발 밑에 숨겨져 지하 수호 미로로 통하는 바닥 문.' },
  { id: '악마의 덫', label: '악마의 덫', group: 'object', subType: '위험 식물', description: '스프라우트 교수가 배치한 식물. 저항할수록 조여들며 빛과 불에 취약함.' },
  { id: '날개 달린 열쇠들', label: '날개 달린 열쇠들', group: 'object', subType: '마법 자물쇠 기믹', description: '플리트윅 교수의 마법으로 날아다니는 수백 마리의 마법 열쇠 무리.' },
  { id: '거대 마법사 체스판', label: '거대 마법사 체스판', group: 'object', subType: '살아있는 석상 체스', description: '맥고나걸 교수가 배치한 거대한 석조 체스 말들의 전장.' },
  { id: '소망의 거울', label: '소망의 거울', group: 'object', subType: '고대 마법 거울', description: '마음 속 가장 깊은 소망을 비추며, 덤블도어가 돌을 지키는 최종 안전장치로 사용함.' },
  { id: '기억구슬', label: '기억구슬', group: 'object', subType: '마법 장치', description: '잊은 것이 있을 때 붉은 연기로 변하는 네빌의 마법 구슬.' },
  { id: '골든 스니치', label: '골든 스니치', group: 'object', subType: '퀴디치 공', description: '잡으면 150점을 얻고 경기가 종료되는 날개 달린 황금 공.' }
];

export const GRAPH_EDGES: GraphEdge[] = [
  // 1. 인물 간 관계
  { from: '해리 포터', to: '드레이코 말포이', label: 'RIVAL_OF', cypher: "MATCH (a:person {name: '해리 포터'}), (b:person {name: '드레이코 말포이'}) MERGE (a)-[:RIVAL_OF]->(b);", description: '호그와트 입학 첫날부터 시작된 숙명의 라이벌' },
  { from: '론 위즐리', to: '드레이코 말포이', label: 'RIVAL_OF', cypher: "MATCH (a:person {name: '론 위즐리'}), (b:person {name: '드레이코 말포이'}) MERGE (a)-[:RIVAL_OF]->(b);", description: '말포이의 위즐리 가문 모욕으로 형성된 적대 관계' },
  { from: '네빌 롱바텀', to: '드레이코 말포이', label: 'RIVAL_OF', cypher: "MATCH (a:person {name: '네빌 롱바텀'}), (b:person {name: '드레이코 말포이'}) MERGE (a)-[:RIVAL_OF]->(b);", description: '말포이의 괴롭힘과 기억구슬 탈취에 대립' },
  { from: '해리 포터', to: '볼드모트 경', label: 'RIVAL_OF', cypher: "MATCH (a:person {name: '해리 포터'}), (b:person {name: '볼드모트 경'}) MERGE (a)-[:RIVAL_OF]->(b);", description: '부모의 원수이자 마법 세계의 평화를 위협하는 최종 적대자' },
  { from: '해리 포터', to: '퀴리누스 퀴렐', label: 'RIVAL_OF', cypher: "MATCH (a:person {name: '해리 포터'}), (b:person {name: '퀴리누스 퀴렐'}) MERGE (a)-[:RIVAL_OF]->(b);", description: '볼드모트의 하수인으로 돌을 탈취하려는 퀴렐과 대립' },
  { from: '퀴리누스 퀴렐', to: '볼드모트 경', label: 'SERVES', cypher: "MATCH (a:person {name: '퀴리누스 퀴렐'}), (b:person {name: '볼드모트 경'}) MERGE (a)-[:SERVES]->(b);", description: '자신의 몸을 내어주며 어둠의 군주를 모심' },
  { from: '루베우스 해그리드', to: '알버스 덤블도어', label: 'SERVES', cypher: "MATCH (a:person {name: '루베우스 해그리드'}), (b:person {name: '알버스 덤블도어'}) MERGE (a)-[:SERVES]->(b);", description: '덤블도어의 절대적인 신뢰를 받으며 그의 명을 수행' },

  { from: '해리 포터', to: '론 위즐리', label: 'FRIEND_OF', cypher: "MATCH (a:person {name: '해리 포터'}), (b:person {name: '론 위즐리'}) MERGE (a)-[:FRIEND_OF]->(b);", description: '급행열차에서 시작된 가장 굳건한 평생 친구' },
  { from: '해리 포터', to: '헤르미온느 그레인저', label: 'FRIEND_OF', cypher: "MATCH (a:person {name: '해리 포터'}), (b:person {name: '헤르미온느 그레인저'}) MERGE (a)-[:FRIEND_OF]->(b);", description: '트롤 사건 이후 생사를 함께하는 삼총사의 일원' },
  { from: '론 위즐리', to: '헤르미온느 그레인저', label: 'FRIEND_OF', cypher: "MATCH (a:person {name: '론 위즐리'}), (b:person {name: '헤르미온느 그레인저'}) MERGE (a)-[:FRIEND_OF]->(b);", description: '처음엔 다퉜으나 트롤 사건을 계기로 둘도 없는 친구가 됨' },
  { from: '해리 포터', to: '루베우스 해그리드', label: 'FRIEND_OF', cypher: "MATCH (a:person {name: '해리 포터'}), (b:person {name: '루베우스 해그리드'}) MERGE (a)-[:FRIEND_OF]->(b);", description: '해리에게 마법 세계의 문을 열어준 든든한 친구이자 보호자' },
  { from: '빈센트 크랩', to: '드레이코 말포이', label: 'FRIEND_OF', cypher: "MATCH (a:person {name: '빈센트 크랩'}), (b:person {name: '드레이코 말포이'}) MERGE (a)-[:FRIEND_OF]->(b);", description: '슬리데린 동급생이자 말포이의 측근' },
  { from: '그레고리 고일', to: '드레이코 말포이', label: 'FRIEND_OF', cypher: "MATCH (a:person {name: '그레고리 고일'}), (b:person {name: '드레이코 말포이'}) MERGE (a)-[:FRIEND_OF]->(b);", description: '슬리데린 동급생이자 말포이의 측근' },

  { from: '세베루스 스네이프', to: '해리 포터', label: 'PROTECTS', cypher: "MATCH (a:person {name: '세베루스 스네이프'}), (b:person {name: '해리 포터'}) MERGE (a)-[:PROTECTS]->(b);", description: '퀴디치 경기 중 퀴렐의 저주를 막는 카운터 저주를 외우며 보호' },
  { from: '알버스 덤블도어', to: '해리 포터', label: 'PROTECTS', cypher: "MATCH (a:person {name: '알버스 덤블도어'}), (b:person {name: '해리 포터'}) MERGE (a)-[:PROTECTS]->(b);", description: '호그와트 전체와 해리의 안전을 지키는 후견인' },
  { from: '루베우스 해그리드', to: '해리 포터', label: 'PROTECTS', cypher: "MATCH (a:person {name: '루베우스 해그리드'}), (b:person {name: '해리 포터'}) MERGE (a)-[:PROTECTS]->(b);", description: '위기의 순간마다 해리를 신체적, 심리적으로 보호' },
  { from: '해리 포터', to: '세베루스 스네이프', label: 'SUSPECTS', cypher: "MATCH (a:person {name: '해리 포터'}), (b:person {name: '세베루스 스네이프'}) MERGE (a)-[:SUSPECTS]->(b);", description: '다친 다리와 퀴디치 경기 방해를 목격하고 돌을 훔치려 한다고 의심' },
  { from: '헤르미온느 그레인저', to: '세베루스 스네이프', label: 'SUSPECTS', cypher: "MATCH (a:person {name: '헤르미온느 그레인저'}), (b:person {name: '세베루스 스네이프'}) MERGE (a)-[:SUSPECTS]->(b);", description: '스네이프의 망토에 불을 붙여 주문을 방해할 정도로 강하게 의심' },

  // 2. 소속 (BELONGS_TO)
  { from: '해리 포터', to: '그리핀도르', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '해리 포터'}), (b:group {name: 'Gryffindor'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '분류 모자의 추천을 거쳐 그리핀도르로 배정됨' },
  { from: '론 위즐리', to: '그리핀도르', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '론 위즐리'}), (b:group {name: 'Gryffindor'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '위즐리 가문의 전통대로 그리핀도르 배정' },
  { from: '헤르미온느 그레인저', to: '그리핀도르', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '헤르미온느 그레인저'}), (b:group {name: 'Gryffindor'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '뛰어난 지성뿐 아니라 용기를 품어 그리핀도르 배정' },
  { from: '네빌 롱바텀', to: '그리핀도르', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '네빌 롱바텀'}), (b:group {name: 'Gryffindor'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '숨겨진 진정한 용기를 지녀 그리핀도르 배정' },
  { from: '드레이코 말포이', to: '슬리데린', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '드레이코 말포이'}), (b:group {name: 'Slytherin'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '순수혈통의 자부심으로 모자가 닿기도 전에 슬리데린 배정' },
  { from: '세베루스 스네이프', to: '슬리데린', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '세베루스 스네이프'}), (b:group {name: 'Slytherin'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '슬리데린 기숙사 출신이자 현재의 담당 사감 교수' },
  { from: '알버스 덤블도어', to: '호그와트 교수진', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '알버스 덤블도어'}), (b:group {name: 'Hogwarts Teachers'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '호그와트의 최고 책임자 교장' },
  { from: '미네르바 맥고나걸', to: '호그와트 교수진', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '미네르바 맥고나걸'}), (b:group {name: 'Hogwarts Teachers'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '교감이자 변신술 교수' },
  { from: '퀴리누스 퀴렐', to: '호그와트 교수진', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '퀴리누스 퀴렐'}), (b:group {name: 'Hogwarts Teachers'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '어둠의 마법 방어술 교수' },
  { from: '해리 포터', to: '그리핀도르 퀴디치 팀', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '해리 포터'}), (b:group {name: 'Gryffindor Quidditch Team'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '100년 만의 최연소 수색꾼으로 발탁' },
  { from: '버논 더즐리', to: '더즐리 가족', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '버논 더즐리'}), (b:group {name: 'Dursley Family'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '더즐리 가문의 가장' },
  { from: '론 위즐리', to: '위즐리 가문', label: 'BELONGS_TO', cypher: "MATCH (a:person {name: '론 위즐리'}), (b:group {name: 'Weasley Family'}) MERGE (a)-[:BELONGS_TO]->(b);", description: '아서와 몰리 위즐리의 6번째 아들' },

  // 3. 사물 소유 및 증여 (OWNS, GIVES)
  { from: '해리 포터', to: '투명 망토', label: 'OWNS', cypher: "MATCH (a:person {name: '해리 포터'}), (b:object {name: 'Invisibility Cloak'}) MERGE (a)-[:OWNS]->(b);", description: '크리스마스에 아버지의 유품으로 익명의 선물로 전달받음' },
  { from: '해리 포터', to: '님부스 2000', label: 'OWNS', cypher: "MATCH (a:person {name: '해리 포터'}), (b:object {name: 'Nimbus 2000'}) MERGE (a)-[:OWNS]->(b);", description: '맥고나걸 교수가 선물한 최고 사양의 빗자루 소유' },
  { from: '해리 포터', to: '해리의 지팡이', label: 'OWNS', cypher: "MATCH (a:person {name: '해리 포터'}), (b:object {name: 'Harry\'s Wand'}) MERGE (a)-[:OWNS]->(b);", description: '올리반더 가게에서 선택받은 서양호랑가시나무 지팡이' },
  { from: '해리 포터', to: '헤드위그', label: 'OWNS', cypher: "MATCH (a:person {name: '해리 포터'}), (b:object {name: 'Hedwig'}) MERGE (a)-[:OWNS]->(b);", description: '해그리드가 선물해준 충직한 올빼미' },
  { from: '루베우스 해그리드', to: '플러피', label: 'OWNS', cypher: "MATCH (a:person {name: '루베우스 해그리드'}), (b:object {name: 'Fluffy'}) MERGE (a)-[:OWNS]->(b);", description: '술집의 그리스인에게서 구입해 돌을 지키도록 학교에 배치' },
  { from: '미네르바 맥고나걸', to: '님부스 2000', label: 'GIVES (to: 해리)', cypher: "MATCH (a:person {name: '미네르바 맥고나걸'}), (b:object {name: 'Nimbus 2000'}) MERGE (a)-[:GIVES {to: '해리 포터'}]->(b);", description: '퀴디치 경기력 향상을 위해 해리에게 하사' },
  { from: '루베우스 해그리드', to: '헤드위그', label: 'GIVES (to: 해리)', cypher: "MATCH (a:person {name: '루베우스 해그리드'}), (b:object {name: 'Hedwig'}) MERGE (a)-[:GIVES {to: '해리 포터'}]->(b);", description: '해리의 11살 생일을 축하하며 선물' },
  { from: '루베우스 해그리드', to: '호그와트 입학 편지', label: 'GIVES (to: 해리)', cypher: "MATCH (a:person {name: '루베우스 해그리드'}), (b:object {name: 'Hogwarts Acceptance Letter'}) MERGE (a)-[:GIVES {to: '해리 포터'}]->(b);", description: '바위섬 오두막에서 해리에게 직접 전달' },

  // 4. 사건 참여 (PARTICIPATES_IN)
  { from: '해리 포터', to: 'The Sorting Ceremony', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '해리 포터'}), (b:event {name: 'The Sorting Ceremony'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '론 위즐리', to: 'The Sorting Ceremony', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '론 위즐리'}), (b:event {name: 'The Sorting Ceremony'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '헤르미온느 그레인저', to: 'The Sorting Ceremony', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '헤르미온느 그레인저'}), (b:event {name: 'The Sorting Ceremony'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '드레이코 말포이', to: 'The Sorting Ceremony', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '드레이코 말포이'}), (b:event {name: 'The Sorting Ceremony'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },

  { from: '해리 포터', to: 'The Halloween Troll Incident', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '해리 포터'}), (b:event {name: 'The Halloween Troll Incident'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '론 위즐리', to: 'The Halloween Troll Incident', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '론 위즐리'}), (b:event {name: 'The Halloween Troll Incident'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '헤르미온느 그레인저', to: 'The Halloween Troll Incident', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '헤르미온느 그레인저'}), (b:event {name: 'The Halloween Troll Incident'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '퀴리누스 퀴렐', to: 'The Halloween Troll Incident', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '퀴리누스 퀴렐'}), (b:event {name: 'The Halloween Troll Incident'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },

  { from: '해리 포터', to: 'Gryffindor vs. Slytherin Quidditch Match', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '해리 포터'}), (b:event {name: 'Gryffindor vs. Slytherin Quidditch Match'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '퀴리누스 퀴렐', to: 'Gryffindor vs. Slytherin Quidditch Match', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '퀴리누스 퀴렐'}), (b:event {name: 'Gryffindor vs. Slytherin Quidditch Match'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '세베루스 스네이프', to: 'Gryffindor vs. Slytherin Quidditch Match', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '세베루스 스네이프'}), (b:event {name: 'Gryffindor vs. Slytherin Quidditch Match'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },

  { from: '해리 포터', to: 'Fluffy Chamber Encounter', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '해리 포터'}), (b:event {name: 'Fluffy Chamber Encounter'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '론 위즐리', to: 'Fluffy Chamber Encounter', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '론 위즐리'}), (b:event {name: 'Fluffy Chamber Encounter'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '헤르미온느 그레인저', to: 'Fluffy Chamber Encounter', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '헤르미온느 그레인저'}), (b:event {name: 'Fluffy Chamber Encounter'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },

  { from: '해리 포터', to: 'Devil\'s Snare Chamber', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '해리 포터'}), (b:event {name: 'Devil\'s Snare Chamber'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '헤르미온느 그레인저', to: 'Devil\'s Snare Chamber', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '헤르미온느 그레인저'}), (b:event {name: 'Devil\'s Snare Chamber'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },

  { from: '해리 포터', to: 'Flying Keys Chamber', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '해리 포터'}), (b:event {name: 'Flying Keys Chamber'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '해리 포터', to: 'Wizard\'s Chess Chamber', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '해리 포터'}), (b:event {name: 'Wizard\'s Chess Chamber'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '론 위즐리', to: 'Wizard\'s Chess Chamber', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '론 위즐리'}), (b:event {name: 'Wizard\'s Chess Chamber'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '론 위즐리', to: 'Ron\'s Chess Sacrifice', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '론 위즐리'}), (b:event {name: 'Ron\'s Chess Sacrifice'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },

  { from: '해리 포터', to: 'Mirror of Erised Chamber', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '해리 포터'}), (b:event {name: 'Mirror of Erised Chamber'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '퀴리누스 퀴렐', to: 'Mirror of Erised Chamber', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '퀴리누스 퀴렐'}), (b:event {name: 'Mirror of Erised Chamber'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '볼드모트 경', to: 'Mirror of Erised Chamber', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '볼드모트 경'}), (b:event {name: 'Mirror of Erised Chamber'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '해리 포터', to: 'Harry Confronts Quirrell', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '해리 포터'}), (b:event {name: 'Harry Confronts Quirrell'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '퀴리누스 퀴렐', to: 'Harry Confronts Quirrell', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '퀴리누스 퀴렐'}), (b:event {name: 'Harry Confronts Quirrell'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },
  { from: '볼드모트 경', to: 'Harry Confronts Quirrell', label: 'PARTICIPATES_IN', cypher: "MATCH (a:person {name: '볼드모트 경'}), (b:event {name: 'Harry Confronts Quirrell'}) MERGE (a)-[:PARTICIPATES_IN]->(b);" },

  // 5. 사물 사용 (USED_IN)
  { from: '마법사의 돌', to: 'Mirror of Erised Chamber', label: 'USED_IN', cypher: "MATCH (a:object {name: 'Sorcerer\'s Stone'}), (b:event {name: 'Mirror of Erised Chamber'}) MERGE (a)-[:USED_IN]->(b);", description: '소망의 거울을 통해 해리의 주머니로 소환됨' },
  { from: '투명 망토', to: 'Fluffy Chamber Encounter', label: 'USED_IN', cypher: "MATCH (a:object {name: 'Invisibility Cloak'}), (b:event {name: 'Fluffy Chamber Encounter'}) MERGE (a)-[:USED_IN]->(b);", description: '필치와 노리스 부인을 피해 3층 복도로 잠입할 때 사용' },
  { from: '님부스 2000', to: 'Gryffindor vs. Slytherin Quidditch Match', label: 'USED_IN', cypher: "MATCH (a:object {name: 'Nimbus 2000'}), (b:event {name: 'Gryffindor vs. Slytherin Quidditch Match'}) MERGE (a)-[:USED_IN]->(b);", description: '해리가 첫 퀴디치 경기에서 활약하고 스니치를 잡는데 사용' },
  { from: '소망의 거울', to: 'Mirror of Erised Chamber', label: 'USED_IN', cypher: "MATCH (a:object {name: 'Mirror of Erised'}), (b:event {name: 'Mirror of Erised Chamber'}) MERGE (a)-[:USED_IN]->(b);", description: '돌을 찾으려 하지만 사용하지 않을 자에게만 돌을 내주는 관문' },
  { from: '악마의 덫', to: 'Devil\'s Snare Chamber', label: 'USED_IN', cypher: "MATCH (a:object {name: 'Devil\'s Snare'}), (b:event {name: 'Devil\'s Snare Chamber'}) MERGE (a)-[:USED_IN]->(b);", description: '침입자를 옭아매는 2차 방어선으로 작용' },
  { from: '날개 달린 열쇠들', to: 'Flying Keys Chamber', label: 'USED_IN', cypher: "MATCH (a:object {name: 'Flying Keys'}), (b:event {name: 'Flying Keys Chamber'}) MERGE (a)-[:USED_IN]->(b);", description: '다음 방으로 가는 육중한 문을 여는 열쇠 시험' },
  { from: '거대 마법사 체스판', to: 'Wizard\'s Chess Chamber', label: 'USED_IN', cypher: "MATCH (a:object {name: 'Giant Wizard\'s Chess Set'}), (b:event {name: 'Wizard\'s Chess Chamber'}) MERGE (a)-[:USED_IN]->(b);", description: '생명을 걸고 플레이해야 하는 체스 관문' },
  { from: '플러피', to: 'Fluffy Chamber Encounter', label: 'USED_IN', cypher: "MATCH (a:object {name: 'Fluffy'}), (b:event {name: 'Fluffy Chamber Encounter'}) MERGE (a)-[:USED_IN]->(b);", description: '1차 침입 방어 기믹으로 배치' },

  // 6. 사물 방어 (GUARDS)
  { from: '플러피', to: '마법사의 돌', label: 'GUARDS', cypher: "MATCH (a:object {name: 'Fluffy'}), (b:object {name: 'Sorcerer\'s Stone'}) MERGE (a)-[:GUARDS]->(b);", description: '지하로 내려가는 첫 번째 관문을 방어' },
  { from: '악마의 덫', to: '마법사의 돌', label: 'GUARDS', cypher: "MATCH (a:object {name: 'Devil\'s Snare'}), (b:object {name: 'Sorcerer\'s Stone'}) MERGE (a)-[:GUARDS]->(b);", description: '트랩도어 하부의 2차 방어선' },
  { from: '날개 달린 열쇠들', to: '마법사의 돌', label: 'GUARDS', cypher: "MATCH (a:object {name: 'Flying Keys'}), (b:object {name: 'Sorcerer\'s Stone'}) MERGE (a)-[:GUARDS]->(b);", description: '비행 실력을 시험하는 3차 방어선' },
  { from: '거대 마법사 체스판', to: '마법사의 돌', label: 'GUARDS', cypher: "MATCH (a:object {name: 'Giant Wizard\'s Chess Set'}), (b:object {name: 'Sorcerer\'s Stone'}) MERGE (a)-[:GUARDS]->(b);", description: '전략과 희생을 시험하는 4차 방어선' },
  { from: '소망의 거울', to: '마법사의 돌', label: 'GUARDS', cypher: "MATCH (a:object {name: 'Mirror of Erised'}), (b:object {name: 'Sorcerer\'s Stone'}) MERGE (a)-[:GUARDS]->(b);", description: '순수한 동기를 지닌 자만 통과시키는 최종 안전장치' },

  // 7. 장소 위치 (LOCATED_IN, OCCURS_AT)
  { from: '3층 금지 복도', to: '호그와트', label: 'LOCATED_IN', cypher: "MATCH (a:place {name: 'Third-Floor Corridor'}), (b:place {name: 'Hogwarts'}) MERGE (a)-[:LOCATED_IN]->(b);" },
  { from: '플러피가 있는 방', to: '3층 금지 복도', label: 'LOCATED_IN', cypher: "MATCH (a:place {name: 'Fluffy\'s Room'}), (b:place {name: 'Third-Floor Corridor'}) MERGE (a)-[:LOCATED_IN]->(b);" },
  { from: '최종 대결의 방', to: '호그와트', label: 'LOCATED_IN', cypher: "MATCH (a:place {name: 'Final Chamber'}), (b:place {name: 'Hogwarts'}) MERGE (a)-[:LOCATED_IN]->(b);" },
  { from: '마법사의 돌', to: '최종 대결의 방', label: 'LOCATED_IN', cypher: "MATCH (a:object {name: 'Sorcerer\'s Stone'}), (b:place {name: 'Final Chamber'}) MERGE (a)-[:LOCATED_IN]->(b);" },
  { from: '마법사의 돌', to: '713번 금고', label: 'LOCATED_IN', cypher: "MATCH (a:object {name: 'Sorcerer\'s Stone'}), (b:place {name: 'Vault 713'}) MERGE (a)-[:LOCATED_IN]->(b);" },
  { from: '713번 금고', to: '그린고츠 은행', label: 'LOCATED_IN', cypher: "MATCH (a:place {name: 'Vault 713'}), (b:place {name: 'Gringotts'}) MERGE (a)-[:LOCATED_IN]->(b);" },
  { from: '그린고츠 은행', to: '다이애건 앨리', label: 'LOCATED_IN', cypher: "MATCH (a:place {name: 'Gringotts'}), (b:place {name: 'Diagon Alley'}) MERGE (a)-[:LOCATED_IN]->(b);" },
  { from: '소망의 거울', to: '최종 대결의 방', label: 'LOCATED_IN', cypher: "MATCH (a:object {name: 'Mirror of Erised'}), (b:place {name: 'Final Chamber'}) MERGE (a)-[:LOCATED_IN]->(b);" },

  { from: 'Mirror of Erised Chamber', to: '최종 대결의 방', label: 'OCCURS_AT', cypher: "MATCH (a:event {name: 'Mirror of Erised Chamber'}), (b:place {name: 'Final Chamber'}) MERGE (a)-[:OCCURS_AT]->(b);" },
  { from: 'Harry Confronts Quirrell', to: '최종 대결의 방', label: 'OCCURS_AT', cypher: "MATCH (a:event {name: 'Harry Confronts Quirrell'}), (b:place {name: 'Final Chamber'}) MERGE (a)-[:OCCURS_AT]->(b);" },
  { from: 'Fluffy Chamber Encounter', to: '플러피가 있는 방', label: 'OCCURS_AT', cypher: "MATCH (a:event {name: 'Fluffy Chamber Encounter'}), (b:place {name: 'Fluffy\'s Room'}) MERGE (a)-[:OCCURS_AT]->(b);" },
  { from: 'Gryffindor vs. Slytherin Quidditch Match', to: '퀴디치 경기장', label: 'OCCURS_AT', cypher: "MATCH (a:event {name: 'Gryffindor vs. Slytherin Quidditch Match'}), (b:place {name: 'Quidditch Pitch'}) MERGE (a)-[:OCCURS_AT]->(b);" },
  { from: 'The Sorting Ceremony', to: '호그와트', label: 'OCCURS_AT', cypher: "MATCH (a:event {name: 'The Sorting Ceremony'}), (b:place {name: 'Hogwarts'}) MERGE (a)-[:OCCURS_AT]->(b);" }
];

export const KEY_QUESTIONS = [
  {
    id: 'Q1',
    title: 'Q1. 해리가 받은 사물과 사용된 사건 탐색',
    subtitle: 'receivedFrom · receivedItem · usedIn 경로 추적',
    desc: '해리 포터가 다른 인물(해그리드, 맥고나걸, 덤블도어 등)로부터 건네받거나 소유하게 된 상징적 마법 아이템(투명 망토, 님부스 2000, 지팡이)과, 해당 사물들이 어떤 사건(퀴디치 경기, 플러피 잠입, 볼드모트 대결)에서 핵심적으로 사용되었는지를 다중 홉(Multi-hop) 경로로 분석합니다.',
    cypher: `// Q1: 해리가 획득한 사물 및 해당 사물이 투입된 사건 탐색
MATCH (harry:person {name: '해리 포터'})
OPTIONAL MATCH (giver:person)-[:GIVES]->(item:object)
OPTIONAL MATCH (harry)-[:OWNS]->(item:object)
MATCH (item)-[:USED_IN]->(e:event)
OPTIONAL MATCH (e)-[:OCCURS_AT]->(p:place)
RETURN harry.name AS Receiver, 
       giver.name AS Giver, 
       item.name AS Item, 
       e.name AS Event, 
       p.name AS Location
ORDER BY Event;`,
    highlightNodes: ['해리 포터', '투명 망토', '님부스 2000', '해리의 지팡이', '미네르바 맥고나걸', '루베우스 해그리드', 'Fluffy Chamber Encounter', 'Gryffindor vs. Slytherin Quidditch Match', 'Mirror of Erised Chamber'],
    insight: '해그리드(생일 및 안내자 역할)와 맥고나걸(재능 발굴자)로부터 유입된 도구들이 후반부 위기 극복의 물리적 수단으로 전환되는 서사적 인과관계가 그래프 상에서 명확한 체인 형태로 드러납니다.'
  },
  {
    id: 'Q2',
    title: 'Q2. 마법사의 돌 보호/탈취 메커니즘 분석',
    subtitle: 'guards · protects · suspects · usedIn 복합 관계망',
    desc: '그린고츠 713번 금고부터 호그와트 지하 5단계 방어선(플러피, 악마의 덫, 날개 달린 열쇠, 거대 마법사 체스, 소망의 거울)에 이르는 마법사의 돌 수호 체계와, 이를 둘러싼 퀴렐/볼드모트의 탈취 시도 및 스네이프를 향한 삼총사의 오해 구조를 규명합니다.',
    cypher: `// Q2: 마법사의 돌을 지키는 관문 및 관련 인물/사건 체인
MATCH (stone:object {name: '마법사의 돌'})
MATCH (guardian:object)-[:GUARDS]->(stone)
OPTIONAL MATCH (guardian)-[:LOCATED_IN]->(room:place)
OPTIONAL MATCH (guardian)-[:USED_IN]->(ev:event)
OPTIONAL MATCH (culprit:person)-[:PARTICIPATES_IN]->(ev)
RETURN stone.name AS Target, 
       guardian.name AS GuardianObject, 
       room.name AS Chamber, 
       ev.name AS DefenseEvent, 
       collect(DISTINCT culprit.name) AS KeyFigures;`,
    highlightNodes: ['마법사의 돌', '플러피', '악마의 덫', '날개 달린 열쇠들', '거대 마법사 체스판', '소망의 거울', '최종 대결의 방', '퀴리누스 퀴렐', '볼드모트 경', '세베루스 스네이프'],
    insight: '각 수호 장치는 담당 교수(해그리드, 스프라우트, 플리트윅, 맥고나걸, 덤블도어)의 전문 영역을 상징하며, 이를 돌파하는 과정에서 해리·론·헤르미온느의 고유 역량이 하나씩 발휘되는 퀘스트 구조를 입증합니다.'
  },
  {
    id: 'Q3',
    title: 'Q3. 호그와트 내 해리의 직접 적대 관계 및 기숙사 구도',
    subtitle: 'belongsTo · rivalOf · serves 계열 구조',
    desc: '동일 학교(호그와트) 소속 집단 내부에서 해리와 직접적인 적대(RIVAL_OF) 관계를 맺고 있는 인물군(말포이, 퀴렐, 볼드모트)과 이들의 소속 기숙사(슬리데린, 교수진) 및 추종자 네트워크를 추적합니다.',
    cypher: `// Q3: 해리와 직접 대립하는 인물 및 해당 인물의 기숙사/집단 소속
MATCH (harry:person {name: '해리 포터'})-[:RIVAL_OF]->(rival:person)
OPTIONAL MATCH (rival)-[:BELONGS_TO]->(g:group)
OPTIONAL MATCH (rival)-[:SERVES]->(master:person)
OPTIONAL MATCH (minion:person)-[:FRIEND_OF]->(rival)
RETURN harry.name AS Hero, 
       rival.name AS Rival, 
       g.name AS Affiliation, 
       master.name AS Master, 
       collect(DISTINCT minion.name) AS Followers;`,
    highlightNodes: ['해리 포터', '드레이코 말포이', '퀴리누스 퀴렐', '볼드모트 경', '슬리데린', '그리핀도르', '빈센트 크랩', '그레고리 고일', '호그와트 교수진'],
    insight: '해리의 갈등 축은 일상적/학원적 라이벌(말포이-슬리데린)과 실존적/생존적 적대자(퀴렐/볼드모트-어둠의 세력)라는 이중 구조로 분화되어 있음을 시각적으로 확인할 수 있습니다.'
  }
];

export const ONTOLOGY_CLASSES = [
  { name: '인물 (Person)', count: '26+ (설계 30)', color: '#ef4444', desc: '서사를 주도하거나 영향을 미치는 행위 주체 (해리, 론, 헤르미온느, 스네이프, 퀴렐, 덤블도어 등)' },
  { name: '집단 (Group)', count: '9+ (설계 8)', color: '#f59e0b', desc: '인물들이 소속된 기숙사, 가족, 가문, 스포츠 팀, 교수 조직' },
  { name: '장소 (Place)', count: '15 (설계 15)', color: '#10b981', desc: '사건이 일어나거나 사물이 위치하는 호그와트 안팎의 물리적 공간' },
  { name: '사건 (Event)', count: '19+ (설계 15)', color: '#8b5cf6', desc: '특정 시점에 인물들이 참여하고 서사의 전환점을 만드는 사건' },
  { name: '사물 (Object)', count: '15 (설계 15)', color: '#06b6d4', desc: '인물이 소유하거나 사건/장소에서 관문 및 기믹으로 기능하는 마법 도구와 생물' }
];

export const ONTOLOGY_RELATIONS = [
  { name: 'BELONGS_TO', start: '인물', end: '집단', desc: '인물이 특정 기숙사, 가문, 팀에 공식 소속됨' },
  { name: 'FRIEND_OF', start: '인물', end: '인물', desc: '상호 우호적이며 협력하는 친구 관계' },
  { name: 'RIVAL_OF', start: '인물', end: '인물', desc: '경쟁하거나 대립·적대하는 관계' },
  { name: 'PROTECTS', start: '인물', end: '인물', desc: '위험으로부터 다른 인물을 수호하거나 보호함' },
  { name: 'SUSPECTS', start: '인물', end: '인물', desc: '특정 혐의나 배후 인물로 의심함' },
  { name: 'SERVES', start: '인물', end: '인물', desc: '주종 관계로서 명령을 수행함' },
  { name: 'PARTICIPATES_IN', start: '인물/집단', end: '사건', desc: '해당 사건의 주체 또는 참가자로 관여함' },
  { name: 'OCCURS_AT', start: '사건', end: '장소', desc: '사건이 발생한 지리적 공간' },
  { name: 'LOCATED_IN', start: '장소/사물', end: '장소', desc: '공간의 계층적 포함 관계 또는 사물의 보관 위치' },
  { name: 'OWNS', start: '인물', end: '사물', desc: '사물을 소유하거나 관리함' },
  { name: 'GIVES', start: '인물', end: '사물', desc: '다른 인물에게 사물을 증여·하사함' },
  { name: 'USED_IN', start: '사물', end: '사건', desc: '사건의 해결이나 전개에 사물이 도구로 활용됨' },
  { name: 'GUARDS', start: '사물', end: '사물', desc: '다른 중요 사물(마법사의 돌 등)을 보호하는 방어벽 역할' }
];
