# Portfolio

포크해서 자유롭게 사용할 수 있는 포트폴리오 템플릿입니다.

## Tech Stack

- [vinext](https://github.com/cloudflare/vinext) (Vite + Next.js App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- Cloudflare Workers

## Getting Started

### 요구 사항

- Node.js >= 22.12.0 (`.nvmrc` 참고)
- Yarn

### 설치 및 실행

```bash
yarn install
yarn dev       # 개발 모드
yarn build     # 프로덕션 빌드
yarn deploy    # Cloudflare Workers 배포
```

## Customization

`data/config.ts` 파일 하나만 수정하면 개인 정보가 전체 사이트에 반영됩니다.

```ts
const config = {
  name: "이름",
  greeting: "안녕하세요",
  description: "소개 문구",
  title: "페이지 타이틀",
  url: "https://your-domain.com",
  locale: "ko_KR",
  links: [
    { label: "GitHub", href: "https://github.com/username" },
    { label: "Email", href: "mailto:you@example.com" },
  ],
};
```

나머지 콘텐츠는 `data/` 디렉토리의 파일들을 수정하세요:

| 파일 | 내용 |
|------|------|
| `data/contacts.ts` | 연락처 |
| `data/introductions.ts` | 자기소개 |
| `data/careers.tsx` | 경력 |
| `data/awards.tsx` | 수상 |
| `data/projects.ts` | 프로젝트 |
| `data/skills.ts` | 기술 스택 |
| `data/educations.tsx` | 학력 |
| `data/others.tsx` | 기타 |

## Features

- 다크 모드 (토글 + 시스템 설정 연동)
- 스크롤 스파이 네비게이션 + 프로그레스 바
- 스크롤 fade-in / 카드 stagger 애니메이션
- SEO (OpenGraph, Twitter Card, JSON-LD, sitemap, robots)
- 반응형 레이아웃

## Deployment

Cloudflare Workers로 배포합니다. GitHub repo settings에 `CLOUDFLARE_API_TOKEN` secret을 추가하면 push 시 자동 배포됩니다.

## License

MIT
