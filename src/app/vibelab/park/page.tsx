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
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white dark:text-black font-bold mr-4">
              1
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              코스 1 : 바이브 코딩으로 AI 에이전트 만들기 (8주 과정)
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 ml-12">
            바이브 코딩의 첫 번째 코스에 오신 것을 환영합니다. 여기서는 프로그래밍의 기초를 다지고, AI 에이전트 개발에 필요한 핵심 개념을 학습합니다. 실제 프로젝트를 통해 실무 감각을 익혀보세요.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto p-4 sm:p-6 lg:p-8">
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
              <td className="border px-2 py-2 align-top font-bold">W1 - 프로그래밍 기초 및 환경설정</td>
              <td className="border px-2 py-2 align-top">
                프로그래밍이란? (변수, 자료형, 제어문)<br />
                AI 에이전트 개념 소개<br />
                개발 환경 구축 (Cursor, Python, Git)<br />
                협업을 위한 Git/GitHub 기초
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 Python으로 간단한 콘솔 앱 만들기<br />
                (예: 숫자 맞추기 게임)<br />
                🔹 GitHub 저장소 생성 및 첫 커밋
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Python, Git, GitHub, Cursor
              </td>
              <td className="border px-2 py-2 align-top">
                CLI 애플리케이션<br />
                - GitHub 링크
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W2 - 웹 API 개발 및 데이터베이스</td>
              <td className="border px-2 py-2 align-top">
                HTTP와 REST API 원리<br />
                FastAPI를 활용한 API 서버 구축<br />
                Pydantic을 이용한 데이터 모델링<br />
                데이터베이스 기초 (Supabase 연동)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 'To-Do 리스트' API 서버 만들기<br />
                (Create, Read, Update, Delete)<br />
                🔹 API와 Supabase 데이터베이스 연결
              </td>
              <td className="border px-2 py-2 align-top w-32">
                FastAPI, Supabase, PostgreSQL
              </td>
              <td className="border px-2 py-2 align-top">
                To-Do 리스트 API<br />
                - 기능별 API 엔드포인트
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W3 - 프론트엔드 기초</td>
              <td className="border px-2 py-2 align-top">
                HTML, CSS, JavaScript 핵심<br />
                Next.js 기반의 컴포넌트 개발<br />
                Tailwind CSS를 이용한 UI 스타일링
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 To-Do 리스트 웹 화면 구현<br />
                🔹 백엔드 API와 데이터 연동<br />
                🔹 컴포넌트 기반 UI 설계
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Next.js, React, Tailwind CSS
              </td>
              <td className="border px-2 py-2 align-top">
                Single Page App (SPA)<br />
                - To-Do 리스트 웹사이트
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W4 - LLM 연동과 프롬프트 엔지니어링</td>
              <td className="border px-2 py-2 align-top">
                LLM API 활용법 (OpenAI)<br />
                프롬프트 엔지니어링 기초<br />
                LangChain을 활용한 LLM 앱 개발
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 FastAPI에 OpenAI API 연동<br />
                🔹 간단한 Q&A 챗봇 API 구현<br />
                🔹 프론트엔드에 챗봇 UI 추가
              </td>
              <td className="border px-2 py-2 align-top w-32">
                OpenAI API, LangChain
              </td>
              <td className="border px-2 py-2 align-top">
                기본 Q&A 챗봇<br />
                - LLM 기반 응답 기능
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W5 - RAG 기초 및 벡터 DB 활용</td>
              <td className="border px-2 py-2 align-top">
                RAG (Retrieval-Augmented Generation) 개념<br />
                Vector Embedding과 Vector Store<br />
                Supabase pgvector 활용법<br />
                문서 로딩 및 텍스트 분할
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 문서 업로드 및 임베딩 저장<br />
                🔹 특정 문서에 대해 질문하고 답하는<br /> RAG 파이프라인 구축
              </td>
              <td className="border px-2 py-2 align-top w-32">
                LangChain, pgvector, OpenAI
              </td>
              <td className="border px-2 py-2 align-top">
                'Chat with your Doc' 앱<br />
                - 문서 기반 Q&A
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W6 - AI 에이전트와 도구(Tool) 연동</td>
              <td className="border px-2 py-2 align-top">
                AI 에이전트 개념 (ReAct)<br />
                에이전트에게 도구 제공하기 (웹 검색 등)<br />
                외부 API를 커스텀 도구로 활용
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 웹 검색이 가능한 리서치 에이전트 구현<br />
                🔹 To-Do 리스트 API를 에이전트의<br/> 커스텀 도구로 연동
              </td>
              <td className="border px-2 py-2 align-top w-32 ">
                LangChain Agents, SerpAPI
              </td>
              <td className="border px-2 py-2 align-top">
                리서치 에이전트<br />
                - 웹 검색 + To-Do 관리
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W7 - 앱 고도화 및 배포</td>
              <td className="border px-2 py-2 align-top">
                사용자 인증 (Supabase Auth)<br />
                에러 핸들링 및 로깅<br />
                클라우드 배포 (Vercel, Railway)<br />
                환경 변수 및 보안 관리
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 회원가입/로그인 기능 추가<br />
                🔹 프론트엔드(Vercel) 및 백엔드(Railway) 배포<br />
                🔹 GitHub Actions를 이용한 CI/CD 설정
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Vercel, Railway, Supabase Auth
              </td>
              <td className="border px-2 py-2 align-top">
                배포된 풀스택 AI 앱<br />
                - 라이브 URL
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W8 - 최종 미니 프로젝트</td>
              <td className="border px-2 py-2 align-top">
                프로젝트 기획 및 설계<br />
                최종 결과물 발표 및 회고
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 배운 내용을 종합하여<br/> 나만의 AI 에이전트 만들기<br />
                (예: 회의록 요약, 코드 생성기 등)
              </td>
              <td className="border px-2 py-2 align-top w-32">
                총동원
              </td>
              <td className="border px-2 py-2 align-top">
                나만의 AI 에이전트 MVP<br />
                - 최종 발표
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 코스 2 */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white dark:text-black font-bold mr-4">
              2
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              코스 2 : 커스텀 데이터로 AI 에이전트 고도화 하기 (8주 과정)
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 ml-12">
            코스 1에서 만든 AI 에이전트의 가능성을 한 단계 끌어올리는 과정입니다. 단순히 주어진 모델을 사용하는 것을 넘어, 자신만의 데이터를 활용하여 에이전트의 지식과 성능을 극대화하는 방법을 배웁니다. 데이터 전처리, 파인튜닝, 고급 RAG 기술을 통해 특정 도메인에 특화된 똑똑한 AI 에이전트를 만들어보세요.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto p-4 sm:p-6 lg:p-8">
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
              <td className="border px-2 py-2 align-top font-bold">W1 - 고급 RAG (데이터 처리)</td>
              <td className="border px-2 py-2 align-top">
                다양한 데이터 소스 연동 (웹, PDF, 노션)<br />
                텍스트 분할 전략 (Semantic Chunking)<br />
                고급 인덱싱 및 데이터 구조
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 LlamaIndex/LangChain을 이용한 데이터 로더 구현<br />
                🔹 특정 웹사이트를 크롤링하여<br/> 지식 베이스 구축
              </td>
              <td className="border px-2 py-2 align-top w-32">
                LlamaIndex, Unstructured.io
              </td>
              <td className="border px-2 py-2 align-top">
                자동화된 데이터 수집<br />
                - 파이프라인
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W2 - 고급 RAG (검색 및 합성)</td>
              <td className="border px-2 py-2 align-top">
                검색 품질 개선 기법<br />
                - Query Expansion, Re-ranking<br />
                - Reciprocal Rank Fusion (RRF)<br />
                Query Routing 및 분석
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 키워드 검색(BM25)과 벡터 검색 결합<br />
                🔹 Cohere Re-ranker를 적용하여<br/> 검색 정확도 향상
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Cohere API, Rank-BM25
              </td>
              <td className="border px-2 py-2 align-top">
                고성능 검색 엔진<br />
                - 검색 결과 비교
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W3 - LLM 파인튜닝 (기초)</td>
              <td className="border px-2 py-2 align-top">
                파인튜닝의 개념과 필요성 (vs RAG)<br />
                Full Fine-tuning vs PEFT (LoRA)<br />
                파인튜닝을 위한 데이터셋 구축
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 특정 도메인의 Q&A 데이터셋 수집 및 정제<br />
                🔹 Hugging Face `datasets` 라이브러리 활용
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Hugging Face, Pandas
              </td>
              <td className="border px-2 py-2 align-top">
                정제된 학습 데이터셋<br />
                - (JSONL 형식)
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W4 - LLM 파인튜닝 (실전)</td>
              <td className="border px-2 py-2 align-top">
                오픈소스 LLM 활용 (Gemma, Llama 3)<br />
                `transformers`와 `peft` 라이브러리<br />
                Colab/Kaggle을 이용한 GPU 활용
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 LoRA를 이용해 소형 LLM 파인튜닝<br />
                🔹 학습 과정 모니터링 (Loss, WandB)
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Google Colab, PEFT, WandB
              </td>
              <td className="border px-2 py-2 align-top">
                나만의 소형 LLM<br />
                - (Fine-tuned model)
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W5 - 모델 평가 및 배포</td>
              <td className="border px-2 py-2 align-top">
                LLM 성능 평가 방법론<br />
                - 정량/정성 평가, Human Evaluation<br />
                모델 서빙 및 최적화 (vLLM, TGI)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 파인튜닝된 모델의 성능 비교/분석<br />
                🔹 FastAPI를 이용해 모델 API 엔드포인트 생성<br />
                🔹 Docker를 이용한 모델 패키징
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Hugging Face Evaluate, FastAPI, Docker
              </td>
              <td className="border px-2 py-2 align-top">
                모델 서빙 API<br />
                - (벤치마크 결과 포함)
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W6 - 에이전트 아키텍처 및 메모리</td>
              <td className="border px-2 py-2 align-top">
                자율 에이전트 아키텍처<br />
                장기/단기 기억 관리 (Memory)<br />
                도구 사용 및 함수 호출의 재귀적 설계
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 대화 내용을 기억하는 챗봇 구현<br />
                🔹 여러 도구를 복합적으로 사용하는<br/> 멀티-턴(Multi-turn) 에이전트 설계
              </td>
              <td className="border px-2 py-2 align-top w-32 ">
                LangGraph, LlamaIndex Agents
              </td>
              <td className="border px-2 py-2 align-top">
                상태 기반 에이전트<br />
                - (Stateful Agent)
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W7 - 하이브리드 시스템 구축</td>
              <td className="border px-2 py-2 align-top">
                RAG + Fine-tuning 결합 전략<br />
                - Retriever-Tuned, Generator-Tuned<br />
                시스템 성능 최적화
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 파인튜닝된 모델을 생성기로 사용<br/>하는 RAG 시스템 구축<br />
                🔹 기존 RAG 시스템과 성능 비교 분석
              </td>
              <td className="border px-2 py-2 align-top w-32">
                -
              </td>
              <td className="border px-2 py-2 align-top">
                하이브리드 AI 시스템<br />
                - (성능 분석 리포트)
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W8 - 최종 프로젝트 (도메인 특화 에이전트)</td>
              <td className="border px-2 py-2 align-top">
                최종 프로젝트 기획 및 설계<br />
                - 특정 산업/도메인 문제 해결<br />
                결과 발표 및 데모
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 자신만의 커스텀 데이터를 활용하여<br/> 특정 작업을 수행하는 AI 에이전트 개발<br />
                (예: 법률 문서 분석, 금융 보고서 요약)
              </td>
              <td className="border px-2 py-2 align-top w-32">
                총동원
              </td>
              <td className="border px-2 py-2 align-top">
                도메인 특화 AI 에이전트<br />
                - (라이브 데모)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 코스 3 */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white dark:text-black font-bold mr-4">
              3
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              코스 3 : 사내 전용 소버린 AI 에이전트 구축 (8주 과정)
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 ml-12">
            다음은 특정 회사 내부에서만 작동하며, 회사 내 데이터만 공유되는 소버린 AI 에이전트를 구축하는 예시입니다. 이 에이전트의 이름은 InhouseGPT이며, 목적은 사내 문서를 분석하고 구성원의 질문에 응답하는 것입니다. 외부와는 전혀 연결되지 않는 폐쇄형 시스템으로, 오직 사내 구성원만 접근할 수 있습니다. 이러한 설정을 통해 기업 내부 데이터를 안전하게 활용하며, 보안과 자율성을 동시에 확보하는 사내 전용 소버린 AI 시스템을 구성할 수 있습니다.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto p-4 sm:p-6 lg:p-8">
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
              <td className="border px-2 py-2 align-top font-bold">W1 - 로컬 LLM 환경 구축</td>
              <td className="border px-2 py-2 align-top">
                폐쇄망 AI 시스템 아키텍처<br />
                로컬 LLM 구동 원리 (GGUF)<br />
                FastAPI 기본 서버 설정
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 `llama-cpp-python` 설치 및 Llama3-8B 모델 로드<br />
                🔹 모델을 호출하는 FastAPI 엔드포인트 구현
              </td>
              <td className="border px-2 py-2 align-top w-32">
                FastAPI, llama-cpp-python
              </td>
              <td className="border px-2 py-2 align-top">
                로컬 LLM 추론 서버
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W2 - 로컬 임베딩과 벡터 DB</td>
              <td className="border px-2 py-2 align-top">
                로컬 임베딩 모델의 이해<br />
                인메모리 벡터 DB (FAISS)<br />
                문서 로딩 및 청킹 전략
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 `./internal-docs` 디렉토리 문서 로더 구현<br />
                🔹 `sentence-transformers`로 문서 임베딩<br />
                🔹 임베딩 결과를 FAISS 인덱스로 저장
              </td>
              <td className="border px-2 py-2 align-top w-32">
                LangChain, FAISS, sentence-transformers
              </td>
              <td className="border px-2 py-2 align-top">
                문서 벡터 DB 파일
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W3 - 사내 문서 Q&A 파이프라인</td>
              <td className="border px-2 py-2 align-top">
                RAG 파이프라인 심화<br />
                효과적인 프롬프트 엔지니어링<br />
                FastAPI 서버와 RAG 연동
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 사용자 질문을 받아 FAISS에서 유사 문서 검색<br />
                🔹 검색된 문서를 컨텍스트로 LLM에 질의<br />
                🔹 최종 답변을 반환하는 Q&A API 완성
              </td>
              <td className="border px-2 py-2 align-top w-32">
                FastAPI, LangChain
              </td>
              <td className="border px-2 py-2 align-top">
                사내 문서 기반 Q&A API
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W4 - 인증 및 감사 로그</td>
              <td className="border px-2 py-2 align-top">
                API 인증/인가의 중요성<br />
                FastAPI 미들웨어를 이용한 접근 제어<br />
                감사를 위한 로깅 시스템 설계
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 API Key 기반으로 API 접근 인증 구현<br />
                🔹 모든 질의/응답을 `logs/audit.log`에 기록
              </td>
              <td className="border px-2 py-2 align-top w-32">
                FastAPI Middleware
              </td>
              <td className="border px-2 py-2 align-top">
                인증/감사 기능이<br/>포함된 API 서버
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W5 - 웹 UI 및 스트리밍</td>
              <td className="border px-2 py-2 align-top">
                Streamlit을 이용한 빠른 프로토타이핑<br />
                LLM 응답 스트리밍의 원리
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 Streamlit으로 Q&A 챗봇 UI 구현<br />
                🔹 FastAPI에서 스트리밍 응답을 지원하도록 수정<br />
                🔹 UI에 타이핑 효과처럼 실시간 응답 표시
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Streamlit
              </td>
              <td className="border px-2 py-2 align-top">
                스트리밍을 지원하는<br />InhouseGPT 웹앱
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W6 - 문서 자동 동기화</td>
              <td className="border px-2 py-2 align-top">
                파일 시스템 이벤트 모니터링<br />
                주기적인 작업 스케줄링
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 `watchdog` 라이브러리로 `./internal-docs` 모니터링<br />
                🔹 파일 추가/변경 시 자동으로 임베딩 업데이트
              </td>
              <td className="border px-2 py-2 align-top w-32 ">
                watchdog
              </td>
              <td className="border px-2 py-2 align-top">
                자동으로 학습하는<br/>문서 관리 시스템
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W7 - 기능 확장 (이메일 요약)</td>
              <td className="border px-2 py-2 align-top">
                IMAP/SMTP 프로토콜 기초<br />
                이메일 데이터 파싱 및 처리<br />
                에이전트의 기능 확장 설계
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 로컬 메일 서버(테스트용)에서 이메일 가져오기<br />
                🔹 가져온 이메일 본문을 LLM으로 요약<br />
                🔹 요약 결과를 API로 제공
              </td>
              <td className="border px-2 py-2 align-top w-32">
                imaplib, smtplib
              </td>
              <td className="border px-2 py-2 align-top">
                이메일 요약 API
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W8 - 패키징 및 사내 배포</td>
              <td className="border px-2 py-2 align-top">
                Docker를 이용한 컨테이너화<br />
                사내 배포를 위한 고려사항<br />
                최종 시스템 데모 및 발표
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 Dockerfile 작성 및 애플리케이션 컨테이너화<br />
                🔹 시스템 설정 및 사용법 `README.md` 작성<br />
                🔹 사내망 배포 시뮬레이션 및 최종 데모
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Docker
              </td>
              <td className="border px-2 py-2 align-top">
                InhouseGPT MVP<br />
                (컨테이너 & 문서)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 코스 4 */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white dark:text-black font-bold mr-4">
              4
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              코스 4 : 모바일 AI 개인형 에이전트 개발 (8주 과정)
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 ml-12">
            당신의 모든 개인 정보가 담긴 스마트폰, 클라우드에 데이터를 보내는 것이 불안하지 않으셨나요? 이제 데이터 유출 걱정 없는 '온디바이스 AI' 시대를 맞이하세요. 이 과정에서는 Flutter를 사용해 작동하는 개인 비서를 직접 만듭니다. 당신의 에이전트는 휴대폰 안에서 연락처를 찾아주고, 일정을 관리하며, 오직 당신의 데이터만을 기반으로 최적의 도움을 제공합니다. 완전한 프라이버시 속에서, 진정으로 나를 위한 AI를 경험해 보세요.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto p-4 sm:p-6 lg:p-8">
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
              <td className="border px-2 py-2 align-top font-bold">W1 - Flutter 기초 및 프라이버시 중심 UI</td>
              <td className="border px-2 py-2 align-top">
                Flutter 및 Dart 언어 기초<br />
                위젯 트리와 상태 관리<br />
                프라이버시를 고려한 UI/UX 설계
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 Flutter 개발 환경 구축 (Android/iOS)<br />
                🔹 데이터 처리 과정을 명시하는 개인 비서 앱 초기 UI 구현
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Flutter, Dart, Provider
              </td>
              <td className="border px-2 py-2 align-top">
                프라이버시 중심 UI 프로토타입
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W2 - 온디바이스 LLM 및 모델 최적화</td>
              <td className="border px-2 py-2 align-top">
                온디바이스 AI의 이해 (TFLite, GGUF)<br />
                모바일용 경량 LLM 모델 선정 기준<br />
                Flutter와 Native 코드 연동 (MethodChannel)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 `llama_cpp_dart`를 이용해 Gemma-2B 모델 연동<br />
                🔹 채팅 UI와 로컬 LLM을 연결하여 완전 오프라인 응답 생성
              </td>
              <td className="border px-2 py-2 align-top w-32">
                llama_cpp_dart, GGUF
              </td>
              <td className="border px-2 py-2 align-top">
                오프라인 AI 챗봇 앱
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W3 - 디바이스 데이터 보안 및 접근</td>
              <td className="border px-2 py-2 align-top">
                모바일 OS 권한 시스템 심층 이해<br />
                연락처, 캘린더, 파일 접근<br />
                민감정보를 위한 보안 저장소 (Secure Storage)
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 `permission_handler`로 권한 요청 UI 구현<br />
                🔹 `flutter_secure_storage`에 중요 정보(API 키 등) 암호화 저장
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Flutter Plugins
              </td>
              <td className="border px-2 py-2 align-top">
                보안 데이터 저장 기능
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W4 - 개인화 RAG 시스템 구축</td>
              <td className="border px-2 py-2 align-top">
                로컬 벡터 저장소 (Isar, Hive)<br />
                온디바이스 임베딩 모델 활용<br />
                개인 데이터(연락처, 문자, 메모)를 활용한 RAG
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 연락처, 메모 앱 데이터를 임베딩하여 로컬 벡터 DB 구축<br />
                🔹 "김민준에게 저녁 약속 어땠냐고 문자 보내줘" 같은 개인화된 질문 처리
              </td>
              <td className="border px-2 py-2 align-top w-32">
                On-device Embeddings
              </td>
              <td className="border px-2 py-2 align-top">
                개인 맞춤형 검색 에이전트
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W5 - 음성 인터페이스 및 지능형 UX</td>
              <td className="border px-2 py-2 align-top">
                온디바이스 음성 인식 및 합성 (STT/TTS)<br />
                음성 활성화 (Wake-word detection)<br />
                대화형 UX 디자인
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 "헤이 비서" 같은 호출어로 앱을 깨우는 기능<br />
                🔹 음성 명령으로 친구에게 전화 걸기
              </td>
              <td className="border px-2 py-2 align-top w-32">
                STT/TTS Plugins
              </td>
              <td className="border px-2 py-2 align-top">
                음성으로 제어하는 AI 비서
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W6 - 자율 에이전트: 백그라운드 작업</td>
              <td className="border px-2 py-2 align-top">
                모바일 백그라운드 프로세스 생명주기<br />
                로컬 푸시 알림 및 Geofencing<br />
                상황인지 기반의 능동적 작업 실행
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 매일 아침 오늘의 일정을 요약하여 로컬 알림 전송<br />
                🔹 '집'에 도착하면 '오늘의 할 일'을 브리핑하는 기능 구현
              </td>
              <td className="border px-2 py-2 align-top w-32 ">
                flutter_workmanager
              </td>
              <td className="border px-2 py-2 align-top">
                상황을 인지하는 능동형 AI 비서
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W7 - 성능 최적화 및 배터리 관리</td>
              <td className="border px-2 py-2 align-top">
                모델 경량화 (8-bit Quantization)<br />
                배터리 및 메모리 사용량 프로파일링<br />
                앱 성능 병목 현상 분석 및 해결
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 LLM 모델 양자화로 응답 속도 및 메모리 사용량 개선<br />
                🔹 Flutter DevTools로 배터리 소모량 분석 및 최적화
              </td>
              <td className="border px-2 py-2 align-top w-32">
                Flutter DevTools
              </td>
              <td className="border px-2 py-2 align-top">
                고효율 AI 비서 앱
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-2 align-top font-bold">W8 - 최종 프로젝트: '나만의 AI 비서'</td>
              <td className="border px-2 py-2 align-top">
                개인화 기능 기획 및 설계<br />
                앱 스토어 배포 가이드라인<br />
                최종 데모 및 포트폴리오 구성
              </td>
              <td className="border px-2 py-2 align-top bg-yellow-50 dark:bg-yellow-900">
                🔹 지금까지의 기능을 통합, 자신만의 특화 기능을 추가하여<br/> 완성도 있는 개인 비서 앱 제작<br />
                🔹 (예: 운전모드, 회의록 요약 등)
              </td>
              <td className="border px-2 py-2 align-top w-32">
                -
              </td>
              <td className="border px-2 py-2 align-top">
                나만의 모바일 AI 비서<br/>포트폴리오
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
