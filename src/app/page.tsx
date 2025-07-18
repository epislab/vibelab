import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white dark:bg-black">
      <div className="w-full bg-orange-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Vibe Coding 커리큘럼
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 opacity-90">
              4개 코스 (코스 당 8주)🧑‍💻
            </span>
          </h1>
        </div>
      </div>
      {/* 코스 1 */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-2">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg my-[12px]">
          <div className="flex items-center mb-4 ">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white dark:text-black font-bold mr-4">
              1
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              모듈 1. 프론트엔드 (8주)
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto p-4 sm:p-6 lg:p-8">
        <table className="min-w-full table-fixed border border-gray-300 dark:border-gray-600 text-xs sm:text-sm bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th
                style={{ width: "12%" }}
                className="border px-2 py-2 font-semibold"
              >
                Chapter
              </th>
              <th
                style={{ width: "14%" }}
                className="border px-2 py-2 font-semibold"
              >
                주차
              </th>
              <th
                style={{ width: "24%" }}
                className="border px-2 py-2 font-semibold"
              >
                주제 (프로젝트)
              </th>
              <th
                style={{ width: "50%" }}
                className="border px-2 py-2 font-semibold"
              >
                핵심 기술 스택 및 개념
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-2 align-top font-bold w-1/20">
                Chapter 1<br />
                (1주 과정)
              </td>
              <td className="border px-2 py-2 align-top w-1/20">1주차</td>
              <td className="border px-2 py-2 align-top">
                프로덕트 기획 및 초고속 런칭
                <br />
                (시크릿 방명록 포트폴리오)
              </td>
              <td className="border px-2 py-2 align-top min-w-[250px]">
                • LLM 활용 PRD 기획
                <br />
                • ChatGPT/Claude로 아이디어 구체화, 기능 정의
                <br />
                • AI 빌더 oooo(v0) - 프롬프트 기반 UI/UX 프로토타이핑
                <br />
                • Supabase (간편 인증/DB) - No-Code 툴 내에서의 간편 연동 개념
                이해
                <br />• Vercel 배포 - Git 연동을 통한 원클릭 배포 및 Live URL
                생성
              </td>
            </tr>
            <tr>
              <td
                className="border px-2 py-2 align-top font-bold  bg-yellow-50 dark:bg-yellow-900"
                rowSpan={3}
                style={{ verticalAlign: "top" }}
              >
                Chapter 2<br />
                (3주 과정)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                2주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                기초 SaaS 개발 #1
                <br />
                (AI 콘텐츠 아이디어 생성기)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • Task Master MCP
                <br />• PRD를 실행 가능한 개발 Task List로 분해
                <br />• Cursor (강의 시기 트렌드에 따라서 AI IDE 선택)
                <br />• Rules(코딩규칙), @멘션(파일 컨텍스트) 기능 활용
                <br />• Next.js / TailwindCSS
                <br />• React 기반 프레임워크 및 Utility-First CSS
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                3주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                기초 SaaS 개발 #2
                <br />
                (AI 콘텐츠 아이디어 생성기)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • Supabase (백엔드 심화)
                <br />• Auth: 이메일/소셜 로그인 직접 구현
                <br />• Database, RLS
                <br />• Context7 MCP로 최신 문서 기반 코드 생성
                <br />• CRUD 로직 구현
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                4주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                기초 SaaS 개발 #3
                <br />
                (AI 콘텐츠 아이디어 생성기)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • n8n (No-Code 워크플로우 자동화)
                <br />• Webhook: 서비스 간 데이터 수신 및 트리거 개념
                <br />• API 자동화: 코딩 없이 API들을 시각적으로 연결
                <br />• 외부 LLM API 연동
              </td>
            </tr>
            <tr>
              <td
                className="border px-2 py-2 align-top font-bold"
                rowSpan={4}
                style={{ verticalAlign: "top" }}
              >
                Chapter 3<br />
                (4주 과정)
              </td>
              <td className="border px-2 py-2 align-top">5주차</td>
              <td className="border px-2 py-2 align-top">
                심화 SaaS 개발 #1
                <br />
                (문서/URL 기반 Q&A 챗봇)
              </td>
              <td className="border px-2 py-2 align-top">
                • Figma MCP (디자인 기반 개발 - PRD로 대체 가능 아직 figma mcp는
                불안정)
                <br />• Figma 디자인 파일을 AI의 핵심 텍스트로 제공
                <br />• shadcn/ui (UI 컴포넌트 라이브러리)
                <br />• 재사용 가능한 UI 컴포넌트 설계 및 커스터마이징
                <br />• Design-to-Code
                <br />• Figma 시안을 기반으로 AI에게 UI 코드 생성 지시
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">6주차</td>
              <td className="border px-2 py-2 align-top">
                심화 SaaS 개발 #2
                <br />
                (문서/URL 기반 Q&A 챗봇)
              </td>
              <td className="border px-2 py-2 align-top">
                • Vector DB (Supabase, pinecone, neo4j 등)
                <br />• Embedding: 텍스트를 벡터로 변환하여 의미 기반 검색
                <br />• RAG (정보 증강 생성) 원리
                <br />• DB설계 → AI에게 문서 기반으로 정확한 답변 생성
                <br />• n8n으로 RAG 파이프라인 시각적 구현
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">7주차</td>
              <td className="border px-2 py-2 align-top">
                심화 SaaS 개발 #3
                <br />
                (문서/URL 기반 Q&A 챗봇)
              </td>
              <td className="border px-2 py-2 align-top">
                • Playwright (E2E 테스트 자동화)
                <br />• 사용자 시나리오 기반 테스트 코드 및 리포트 생성
                <br />• AI에게, 흐름 상태 체크 및 UX 개선
                <br />• 외부 API와 연동으로 기능 확장
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">8주차</td>
              <td className="border px-2 py-2 align-top">
                개인 프로젝트 고도화
                <br />
                (Capstone & Demo Day)
              </td>
              <td className="border px-2 py-2 align-top">
                • 결제 연동
                <br />- 국내: 토스 페이먼츠, 해외: Lemon Squeezy/Paddle 등<br />
                • Capstone Project
                <br />- 기존 프로젝트에 부족했던 아이디어 정립 및 구현
                <br />• 문제 해결
                <br />- 예측 불가능한 문제를 AI와 협업하여 해결
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 코스 2 */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg my-[12px]">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white dark:text-black font-bold mr-4">
              2
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              모듈 2. 백엔드 & DevOps 마스터리 (8주)
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 ml-12">
            ● 프로젝트 주제: 예시로 "실시간 AI 음식 주문 & 배달 중계 플랫폼"
            선정, 수강생의 수준에 맞게 조절 가능.
            <br />
            ● (핵심은 1~4주는 모노리식, 5~8주는 MSA로 보여주고, NestJS,
            IaC(Terraform), sql, docker 생성, github actions 스크립트 등을
            "바이브코딩"으로 최대한 알려주는것이 목표)
            <br />
            ● Pinecone (Vector DB): 사용자의 리뷰 텍스트나 음식 설명 등을 벡터로
            저장하여, "따뜻하고 아늑한 분위기의 레스토랑" 또는 "매콤한 국물
            요리"와 같은 감성/의미 기반 검색 기능을 구현합니다.
            <br />● Neo4j (Graph DB): '사용자-주문-가게-음식
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto p-4 sm:p-6 lg:p-8">
        <table className="min-w-full table-fixed border border-gray-300 dark:border-gray-600 text-xs sm:text-sm bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th
                style={{ width: "12%" }}
                className="border px-2 py-2 font-semibold"
              >
                Chapter
              </th>
              <th
                style={{ width: "14%" }}
                className="border px-2 py-2 font-semibold"
              >
                주차
              </th>
              <th
                style={{ width: "24%" }}
                className="border px-2 py-2 font-semibold"
              >
                주제 (프로젝트)
              </th>
              <th
                style={{ width: "50%" }}
                className="border px-2 py-2 font-semibold"
              >
                핵심 기술 스택 및 개념
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border px-2 py-2 align-top font-bold w-1/20 bg-yellow-50 dark:bg-yellow-900 "
                rowSpan={4}
              >
                Chapter 1<br />
                (4주 과정)
              </td>
              <td className="border px-2 py-2 align-top w-1/20  bg-yellow-50 dark:bg-yellow-900">
                1주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                모놀리식 개발 #1:
                <br />
                가게/메뉴 관리
                <br />
                (가게 등록 및 메뉴 관리 기능)
              </td>
              <td className="border px-2 py-2 align-top min-w-[250px] bg-yellow-50 dark:bg-yellow-900">
                • Cursor (강의 시기 트렌드에 따라서 AI IDE 선택) <br />
                - Rules(코딩규칙), @멘션(파일 컨텍스트) 기능 활용 등 설정 <br />
                • NestJS Fundamentals & AI 기반 코드 생성 <br />
                • 데이터베이스 설계 (RDBMS) <br />
                - Supabase/PostgreSQL 기반 스키마 설계 <br />
                - Context7 MCP로 최신 문서 기반 코드 생성 <br />
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                2주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                모놀리식 개발 #2:
                <br />
                주문/리뷰 관리
                <br />
                (사용자 주문 및 리뷰 작성 기능)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • 복합적인 비즈니스 로직 (주문 상태 변경)
                <br />
                • AI Assisted Refactoring (코드 구조 개선)
                <br />• NoSQL 데이터베이스 (MongoDB, 리뷰 저장)
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                3주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                클라우드 인프라 구축
                <br />
                (API 서버를 클라우드에 배포)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • Terraform (Infrastructure as Code)
                <br />• Docker MCP ("최적화된 Dockerfile 만들어줘")
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                4주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                CI/CD 배포 자동화
                <br />
                (코드를 푸시하면 자동 배포)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • Github Actions (CI/CD)
                <br />• Actions ("배포 워크플로우 짜줘")
              </td>
            </tr>
            <tr>
              <td
                className="border px-2 py-2 align-top font-bold"
                rowSpan={4}
                style={{ verticalAlign: "top" }}
              >
                Chapter 2<br />
                (4주 과정)
              </td>
              <td className="border px-2 py-2 align-top">5주차</td>
              <td className="border px-2 py-2 align-top">
                MSA로의 전환 및 이벤트 기반 설계
                <br />
                설계('가게', '주문', '알림' 서비스 분리)
              </td>
              <td className="border px-2 py-2 align-top">
                • System Design (MSA 전환 설계)
                <br />• Event-Driven Architecture (RabbitMQ/SQS)
                <br />• Event-Sourcing (이벤트 발행 코드 생성)
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">6주차</td>
              <td className="border px-2 py-2 align-top">
                AI 검색 서비스 구축
                <br />
                (의미/감성 기반 검색 기능 추가)
              </td>
              <td className="border px-2 py-2 align-top">
                • Pinecone (Vector DB)
                <br />• 텍스트 임베딩 (리뷰, 음식 설명을 벡터로 변환)
                <br />• Semantic Search
                <br /> - AI에게 리뷰 텍스트를 임베딩하여 Pinecone에 저장하는
                파이프라인 지시
                <br /> - 혹은 n8n 사용
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">7주차</td>
              <td className="border px-2 py-2 align-top">
                그래프 기반 추천 엔진 구축
                <br />
                (개인화 추천 기능 추가)
              </td>
              <td className="border px-2 py-2 align-top">
                • Neo4j (Graph DB)
                <br />• Graph Data Modeling (노드, 관계 설정)
                <br />• Cypher Query Language
                <br />• AI에게 A를 주문한 사용자가 함께 주문한 B를 찾는 Cypher
                쿼리 지시
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">8주차</td>
              <td className="border px-2 py-2 align-top">
                시스템 통합 및 실시간 알림 기능
                <br />
                (전체 시스템 완성 및 라이더 추적)
              </td>
              <td className="border px-2 py-2 align-top">
                • Redis (캐싱 및 실시간 Pub/Sub)
                <br />- Neo4j의 추천 결과를 캐싱하여 성능 향상
                <br />
                - 라이더 위치 실시간 브로드캐스팅
                <br />• Observability (통합 모니터링 프론트 페이지)
                <br />- 바이브 코딩으로 프론트엔드 페이지 간단하게 작성
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 코스 3 */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg my-[12px]">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white dark:text-black font-bold mr-4">
              3
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              모듈3. Flutter Mastery
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 ml-12">
            프로젝트 주제: 예시로 챕터1은 AI 인스타그램 클론, 챕터2는 AI 통역 앱
            선정, 수강생의 수준에 맞게 조절 가능. (핵심은 여러가지 Flutter를
            바이브 코딩으로 가능하다는 것, Dart 언어, State Management에 대한
            이해, pub.dev library 사용, 외부 API 사용, 모바일 백그라운드 작업의
            이해, 모바일 특화 설정 등이 주 목표)
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto p-4 sm:p-6 lg:p-8">
      <table className="min-w-full table-fixed border border-gray-300 dark:border-gray-600 text-xs sm:text-sm bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th
                style={{ width: "12%" }}
                className="border px-2 py-2 font-semibold"
              >
                Chapter
              </th>
              <th
                style={{ width: "14%" }}
                className="border px-2 py-2 font-semibold"
              >
                주차
              </th>
              <th
                style={{ width: "24%" }}
                className="border px-2 py-2 font-semibold"
              >
                주제 (프로젝트)
              </th>
              <th
                style={{ width: "50%" }}
                className="border px-2 py-2 font-semibold"
              >
                핵심 기술 스택 및 개념
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border px-2 py-2 align-top font-bold w-1/20 bg-yellow-50 dark:bg-yellow-900 "
                rowSpan={4}
              >
                Chapter 1<br />
                (4주 과정)
              </td>
              <td className="border px-2 py-2 align-top w-1/20  bg-yellow-50 dark:bg-yellow-900">
                1주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              기획 및 피드 UI
              </td>
              <td className="border px-2 py-2 align-top min-w-[250px] bg-yellow-50 dark:bg-yellow-900">
                • PRD & Task Master MCP: "AI 인스타그램 클론"의 핵심 기능 정의 및 개발 과업 분해 <br />
                • 상태 관리 (GetX): GetMaterialApp, Get.to, Obx 등 기본 개념 학습 <br />
                • UI 구현: Cached_network_image 등 pub.dev 라이브러리를 활용해 메인 피드 UI 구현 <br />
                • Task Master MCP <br />
                - PRD를 실행 가능한 개발 Task List로 분해 <br />
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                2주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              Cursor로 기능 구현하기
                <br />
                (사진 업로드 및 인증)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • Cursor (강의 시기 트렌드에 따라서 AI IDE 선택)
                <br />
                - Rules(코딩규칙), @멘션(파일 컨텍스트) 기능 활용
                <br />
                • 상태 관리 (GetX): GetxController를 이용해 이미지 선택 및 업로드 상태 관리
                <br />
                • Firebase 연동: Auth(인증), Storage(이미지 저장), Firestore(게시물 정보 저장)
                <br />
                • 외부 라이브러리: image_picker를 활용하여 디바이스 갤러리/카메라 접근
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                3주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              AI 자동 캡션 생성
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • 외부 API 연동 (http/dio): GPT-4V, Gemini 등 이미지 인식 LLM API 연동
                <br />• AI 기능: 업로드된 이미지를 분석하여 자동으로 어울리는 캡션을 추천하는 기능 구현
                <br />• 의존성 주입 (GetX): Get.put, Get.find를 이용한 서비스 로케이터 패턴
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                4주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              소셜 기능 및 프로필
                <br />
                내 기기 실행 / 에뮬레이터
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • 실시간 기능: Firestore stream을 Obx와 연결하여 '좋아요' 실시간 반영
                <br />• UI 심화: GridView를 이용해 내가 올린 게시물을 모아보는 프로필 화면 구현
                <br />• 애니메이션: GetX를 활용한 간단한 UI 상태 변화 애니메이션 적용
                <br />• 기기에서 테스트
              </td>
            </tr>
            <tr>
              <td
                className="border px-2 py-2 align-top font-bold"
                rowSpan={4}
                style={{ verticalAlign: "top" }}
              >
                Chapter 2<br />
                (4주 과정)
              </td>
              <td className="border px-2 py-2 align-top">5주차</td>
              <td className="border px-2 py-2 align-top">
              기획 및 대화방 UI
              </td>
              <td className="border px-2 py-2 align-top">
                • PRD & Task Master MCP: "AI 언어 교환 앱"의 요구사항을 정의하고 개발 과업 분해
                <br />• 상태 관리 (Riverpod): ProviderScope, ConsumerWidget, Provider 등 핵심 개념 학습
                <br />• 아키텍처: GetX와 다른 Riverpod의 의존성 주입 방식 및 선언적 구조 이해
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">6주차</td>
              <td className="border px-2 py-2 align-top">
              AI 튜터와 대화하기
              </td>
              <td className="border px-2 py-2 align-top">
                • 외부 AI API: Text-to-Speech(ElevenLabs 등), Speech-to-Text(OpenAI Whisper 등) API 연동
                <br />• 상태 관리 (Riverpod): StateNotifierProvider를 이용해 대화 기록, 로딩 상태 등 복잡한 상태 관리
                <br />• 네이티브 기능: mic_stream 등 pub.dev 라이브러리를 이용한 실시간 음성 입력 처리
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">7주차</td>
              <td className="border px-2 py-2 align-top">
              대화 내용 분석 및 피드백
              </td>
              <td className="border px-2 py-2 align-top">
                • AI 기능 심화: 대화가 끝나면 LLM API가 사용자의 발화 내용을 분석하여 문법 교정 및 더 나은 표현을 제안하는 기능
                <br />• 데이터 영속성: Drift/sqflite를 이용해 학습 기록 및 AI 피드백을 로컬 DB에 저장
                <br />• 성능 최적화: Riverpod의 .autoDispose, select를 활용한 불필요한 위젯 재빌드 방지
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">8주차</td>
              <td className="border px-2 py-2 align-top">
              수익화 및 CI/CD 및 앱
                <br />
                스토어 배포 준비
              </td>
              <td className="border px-2 py-2 align-top">
                • CI/CD (옵션: Codemagic): Github에 코드를 푸시하면 자동으로 테스트 및 TestFlight/Play Console에 배포
                <br />• 수익화: 스토어에 product 설정하고 수익화 준비하기
                <br />• 스토어 심사: App Store/Play Store의 서명 과정과 심사 가이드라인 이해 및 최종 앱 제출
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 코스 4 */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg my-[12px]">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white dark:text-black font-bold mr-4">
              4
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              모듈 4 : LLM 기반 소버린 AI 에이전트 구축
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 ml-12">
            다음은 특정 회사 내부에서만 작동하며, 회사 내 데이터만 공유되는 소버린 AI 에이전트를 구축하는 예시입니다.<br />
            이 에이전트의 이름은 InhouseGPT이며, 목적은 사내 문서를 분석하고 구성원의 질문에 응답하는 것입니다.<br />
            외부와는 전혀 연결되지 않는 폐쇄형 시스템으로, 오직 사내 구성원만 접근할 수 있습니다.<br />
            이러한 설정을 통해 기업 내부 데이터를 안전하게 활용하며, 보안과 자율성을 동시에 확보하는 사내 전용 소버린 AI 시스템을 구성할 수 있습니다.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto p-4 sm:p-6 lg:p-8">
      <table className="min-w-full table-fixed border border-gray-300 dark:border-gray-600 text-xs sm:text-sm bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th
                style={{ width: "12%" }}
                className="border px-2 py-2 font-semibold"
              >
                Chapter
              </th>
              <th
                style={{ width: "14%" }}
                className="border px-2 py-2 font-semibold"
              >
                주차
              </th>
              <th
                style={{ width: "24%" }}
                className="border px-2 py-2 font-semibold"
              >
                주제 (프로젝트)
              </th>
              <th
                style={{ width: "50%" }}
                className="border px-2 py-2 font-semibold"
              >
                핵심 기술 스택 및 개념
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border px-2 py-2 align-top font-bold w-1/20 bg-yellow-50 dark:bg-yellow-900 "
                rowSpan={4}
              >
                Chapter 1<br />
                (4주 과정)
              </td>
              <td className="border px-2 py-2 align-top w-1/20  bg-yellow-50 dark:bg-yellow-900">
                1주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              온프레미스 LLM 서버 구축<br />
              GPU 서버 세팅 및 Llama3 배포<br />
              FastAPI 기반 추론 서버
              </td>
              <td className="border px-2 py-2 align-top min-w-[250px] bg-yellow-50 dark:bg-yellow-900">
                • GPU 서버 환경 구축 (Ubuntu, CUDA, 드라이버)<br />
                • Llama3/llama.cpp 온프레미스 배포<br />
                • FastAPI로 LLM 추론 API 구현<br />
                • Docker Compose로 인프라 구성 자동화<br />
                • 사내망 방화벽/네트워크 설정
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                2주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              사내 인증/인가 시스템 연동<br />
              SSO(SAML, OAuth2) 적용<br />
              접근제어 및 감사 로그 설계
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • SSO(SAML, OAuth2) 연동 실습<br />
                • API 접근제어(JWT, RBAC)<br />
                • 감사 로그 및 보안 이벤트 기록<br />
                • 사내 보안 정책 적용(비밀번호, 2FA 등)
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                3주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              사내 데이터 연동 및 ETL<br />
              ERP/그룹웨어/위키 등 데이터 수집<br />
              ETL 파이프라인 구축
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • 사내 데이터 소스(ERP, 위키 등) 크롤링/수집<br />
                • ETL 자동화 파이프라인 설계<br />
                • 데이터 전처리 및 정제<br />
                • 정기적 데이터 동기화 스케줄링
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                4주차
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
              LLM 서버 운영/모니터링<br />
              장애 대응 및 운영 자동화
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                • LLM 추론 서버 모니터링(Prometheus, Grafana)<br />
                • 장애 알림/자동 롤백 스크립트<br />
                • 운영 자동화(배포, 백업, 로그 관리)
              </td>
            </tr>
            <tr>
              <td
                className="border px-2 py-2 align-top font-bold"
                rowSpan={4}
                style={{ verticalAlign: "top" }}
              >
                Chapter 2<br />
                (4주 과정)
              </td>
              <td className="border px-2 py-2 align-top">5주차</td>
              <td className="border px-2 py-2 align-top">
              사내문서 수집 + 벡터DB 구축<br />
              데이터/인프라 기반 확보
              </td>
              <td className="border px-2 py-2 align-top">
                • 사내 문서 크롤러/수집기 개발 (API 기반 포함)<br />
                • LangChain TextSplitter로 청킹<br />
                • KoSimCSE / BGE / OpenAI 임베딩<br />
                • FAISS 또는 Chroma 기반 벡터DB 구축<br/>
                • 데이터 전처리 자동화 + 오프라인 인덱싱 설계
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">6주차</td>
              <td className="border px-2 py-2 align-top">
              RAG 파이프라인 설계 + 단일턴 Q&A API 완성<br />
              단일 질문 응답 구조 정립
              </td>
              <td className="border px-2 py-2 align-top">
                • LangChain RAG 설계 및 Prompt Engineering<br />
                • RetrievalQA / ConversationalRetrievalQA 실습<br />
                • FastAPI 기반 문서 Q&A API 구축<br />
                • 프롬프트 기반 품질 개선 루프 설계<br/>
                • 로컬 전용 Q&A 서버 구현을 통한 데이터 주권 기초 실습
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">7주차</td>
              <td className="border px-2 py-2 align-top">
              멀티턴 대화 + 다중 Agent + 워크플로우 자동화<br />
              LangGraph 기반 구조 설계
              </td>
              <td className="border px-2 py-2 align-top">
                • LangGraph로 상태 기반 대화형 설계<br />
                • LangChain Agent + Tool + Memory 조합<br />
                • 역할별 다중 Agent 자동화 흐름 구현<br />
                • 사용자 요청 흐름 자동화 (예: 회의 요약 → 보고서 작성)<br />
                • LangGraph로 구성된 자율적 의사결정 Agent 흐름 실습<br />
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top">8주차</td>
              <td className="border px-2 py-2 align-top">
              개인화 + 소버린 AI + 모델 튜닝 + API화 + 거버넌스<br />
              완전한 개인/조직 내 독립형 AI 구축 및 데모 발표
              </td>
              <td className="border px-2 py-2 align-top">
                • 소버린 AI 개념 도입: 외부 의존 없는 자체 AI 운영<br />
                • Hugging Face Hub 또는 로컬 서버 기반 Inference API 구성<br />
                • 프라이빗 에이전트: 사용자 데이터 주권 보장<br />
                • 최종 데모: 소버린 퍼스널 AI 비서 / 사내 전용 LLM 봇 구축 발표<br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
