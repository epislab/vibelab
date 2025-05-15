import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black p-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Vibe Coding 커리큘럼 (8주 과정) (회 8시간) - 총 320시간🧑‍💻
      </h1>
      <div className="w-full max-w-5xl overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-600 text-xs sm:text-sm bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border px-2 py-2 font-semibold">주차</th>
              <th className="border px-2 py-2 font-semibold">학습 이론</th>
              <th className="border px-2 py-2 font-semibold bg-yellow-50 dark:bg-yellow-900">실습 프로젝트</th>
              <th className="border px-2 py-2 font-semibold w-32">사용 도구 · API</th>
              <th className="border px-2 py-2 font-semibold">최종 산출물 · 데모</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W1 - 첫 프로젝트 & 팀빌딩/미션</td>
              <td className="border px-2 py-2 align-top">
                Vibe Coding 소개 (프로젝트 · 코드 · 협업)<br />
                GPT-4 / Gemini / Cursor 환경설정<br />
                협업 규칙 · @doc: 예시 PRD<br />
                프로젝트 주제 선정 · 팀빌딩<br />
                프로젝트 Kickoff · 일정관리 · Preview<br />
                모듈 설계 · Analytics
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              🔹 파이썬 개발환경 구축<br />
              🔹 파이썬 개발환경 구축<br />
              🔹 파이썬의 개론과 디자인패턴<br />
              🔹 FastAPI 구조 및 폴더 구조 설계<br />
              🔹 프로젝트 공통 API 기획<br />
              🔹 Supabase 구조 이해 및 연결 설정<br />
              🔹 GitHub 연동 및 .env 세팅
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Cursor, Tailwind, GPT-4.0, Claude / Vercel
              </td>
              <td className="border px-2 py-2 align-top">
                Static Landing<br />
                - 주요 소개 텍스트<br />
                - 팀별 랜딩 URL
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W2 - Product Thinking & PRD.md</td>
              <td className="border px-2 py-2 align-top">
                PM 사고 · PRD 작성법<br />
                - MVP 정의<br />
                - 주요 기능/문제 (Solution / Pain Point)<br />
                - 유저 시나리오 · 플로우<br />
                - 와이어프레임 · 화면 설계<br />
                - API 설계 (OpenAPI)<br />
                - 데이터 모델 설계<br />
                - 인증/권한 설계
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              🔹 프로젝트 기획 및 RFP 작성<br />
              🔹 ERD 설계 및 FastAPI 모델 정의<br />
              🔹 OpenAPI 문서화 및 JWT 기반 인증 구현<br />
              🔹 핵심 REST API (문서 등록 등) 개발<br />
              🔹 인증/권한 구조 설계 (JWT)<br />
              🔹 Swagger UI 구현 및 테스트
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Cursor, ChatGPT, Gemini, V0 builder
              </td>
              <td className="border px-2 py-2 align-top">
                Functional Page V1<br />
                - PRD 문서<br />
                - 팀별 URL
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W3 - Cursor × MCP & Web Search</td>
              <td className="border px-2 py-2 align-top">
                MCP 개념 · Cursor 설정<br />
                - Smithy/AI 플러그인 소개<br />
                - SerpAPI · Webhook · 외부 JSON ...<br />
                MCP 활용한 데이터 수집/연동<br />
                - 실시간 검색 · LLM 응답
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              🔹 FastAPI router/service 구조 고도화<br />
              🔹 문서 업로드 API + Supabase Storage 연동<br />
              🔹 로그인 · 회원가입 API 완성<br />
              🔹 Swagger 문서에 API 테스트 추가
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Cursor × MCP, SerpAPI, Make Webhook
              </td>
              <td className="border px-2 py-2 align-top">
                문맥 기반 응답 예시<br />
                - 실시간 검색 + LLM 응답 예시
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W4 - Frontend Vibe Coding</td>
              <td className="border px-2 py-2 align-top">
                Next.js 14 핵심 이해<br />
                - Tailwind로 UI 컴포넌트 빌드<br />
                - 상태관리 · 폼 · 모달<br />
                - 팀별 프론트엔드 스케치 소개
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              🔹 Next.js + Zustand 기반 상태관리 구조 설계<br />
              🔹 Tailwind 기반 폼 및 모달 컴포넌트<br />
              🔹 axios 기반 API 연동 구조 설계<br />
              🔹 API 연동 테스트 (문서 업로드/로그인 등)
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Next14, Tailwind, shadcn/ui, v0
              </td>
              <td className="border px-2 py-2 align-top">
                폼 Form Site<br />
                - 예시 폼 : Modal + 상태관리
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W5 - Supabase & RAG 적용</td>
              <td className="border px-2 py-2 align-top">
                SQL vs NoSQL, pgvector<br />
                - Supabase 구조 이해<br />
                - Auth, RLS, Storage<br />
                - RAG 적용 · 임베딩
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              🔹 Next.js 페이지 구성 + SSR 적용<br />
              🔹 Doc-RAG 결과를 프론트에서 연결<br />
              🔹 문서 검색 → Q&A 응답 뷰 구성<br />
              🔹 LangChain 기반 파이프라인 구축 <br />
              (DocumentLoader → TextSplitter → <br />VectorStore → RetrievalQA)<br />
              🔹 OpenAI API Key를 활용한 실시간 Q&A 기능 구현<br />
              🔹 사용자 입력 질문을 OpenAI로 전송하여 답변 생성<br />
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Supabase, OpenAI Embeddings, pgvector, Supabase
              </td>
              <td className="border px-2 py-2 align-top">
                Doc-RAG 예제<br />
                - 문서 업로드/검색<br />
                - Q&A
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W6 - 자동화 (Zapier MCP 또는 팀별 선택)</td>
              <td className="border px-2 py-2 align-top">
                자동화 시나리오 설계<br />
                - Zapier MCP 연동<br />
                - Supabase Trigger → Slack/Email<br />
                - 모니터링 전략
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              🔹 답변 결과를 프론트엔드에 실시간 표시<br /> (로딩/에러 처리 포함)<br />
              🔹 API Key 보안 및 환경변수 관리 방법 적용<br />
              🔹 문서 업로드 후 알림 UI 구현<br />
              🔹 알림 설정 페이지 + 상태 체크 컴포넌트<br />
              🔹 슬랙/이메일 전송 API 호출 연동
              </td>
              <td className="border px-2 py-2 align-top w-32 ">
                Zapier MCP 또는 팀별 선택, Supabase
              </td>
              <td className="border px-2 py-2 align-top">
                Growth Automation<br />
                - 예시: 알림/자동화
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W7 - Model-Swap Playground</td>
              <td className="border px-2 py-2 align-top">
                Cline 및 LLM 실험<br />
                - 다양한 모델 비교/테스트<br />
                - API 연동 실습
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              🔹 Next.js 기반 모델 비교 뷰 구현<br />
              🔹 OpenRouter 등 다양한 LLM API 연동<br />
              🔹 모델 응답 결과 시각화 (차트 등)
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Cline, OpenRouter API, Next.js(Chart)
              </td>
              <td className="border px-2 py-2 align-top">
                Model-Swap Service<br />
                - 실시간 LLM 교체 + 분석
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W8 - Capstone MVP + 발표</td>
              <td className="border px-2 py-2 align-top">
                최종 프로젝트 · 팀별 코드<br />
                - Toss Payments 연동<br />
                - Demo Day : 최종 발표
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              🔹 Vercel로 PWA 프론트엔드 배포<br />
              🔹 Railway에 FastAPI 백엔드 배포<br />
              🔹 CI/CD 및 환경 변수 관리<br />
              🔹 Capstone 발표 및 실시간 데모
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Toss Payments, Supabase
              </td>
              <td className="border px-2 py-2 align-top">
                Revenue MVP<br />
                - LLM-RAG-Automation
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
