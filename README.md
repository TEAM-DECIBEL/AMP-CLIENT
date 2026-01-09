## 🎸 AMP

밴드 콘서트·페스티벌에서 흩어져 있는 공식 공지와 팬 나눔 공지를 한 번에 모아 보여주는 실시간 공지 서비스

## 🎧 TEAM-DECIBEL

<table>
  <tr>
    <td align="center" style="padding:10px">
      <img width="180" height="180" alt="image" src="https://github.com/user-attachments/assets/e69fdfee-da5d-4971-bc21-4194fb6830bb" />

<br/>
      <strong>소현</strong>
    </td>
    <td align="center" style="padding:10px">
     <img width="180" height="180" alt="image" src="https://github.com/user-attachments/assets/01316a18-9846-4665-bc5f-2ce21757e562" />

<br/>
      <strong>지수</strong>
    </td>
    <td align="center" style="padding:10px">
 <img width="180" height="180" alt="image" src="https://github.com/user-attachments/assets/208c72e2-6549-4e46-90f3-ed6a0f515816" />
<br/>
      <strong>진석</strong>
    </td>
    <td align="center" style="padding:10px">
<img width="180" height="180" alt="image" src="https://github.com/user-attachments/assets/5aa13e25-0e8b-4225-938c-c53c0b3d4253" />

<br/>
      <strong>나은</strong>
    </td>
  </tr>
</table>

<br/>

## 🚀 Tech Stack

| 카테고리                    | 기술 스택                                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Library**                 | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge)                             |
| **Server State Management** | ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?logo=reactquery&logoColor=white&style=for-the-badge)    |
| **Language**                | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)              |
| **Build Tool**              | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)                                |
| **Styling**                 | ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-DD8A42?style=for-the-badge)                                  |
| **Repository Management**   | ![Monorepo](https://img.shields.io/badge/Monorepo-000000?style=for-the-badge)                                                  |
| **Build System**            | ![Turborepo](https://img.shields.io/badge/Turborepo-EC4A3F?style=for-the-badge)                                                |
| **Package Manager**         | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?logo=pnpm&logoColor=white&style=for-the-badge)                                |
| **CI/CD**                   | ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white&style=for-the-badge) |

---

<br/>

## 🗂️ Convention

### 🪾Git Flow

#### 🌿 브랜치 전략

| 브랜치                                          | 역할            | 설명                                                  |
| :---------------------------------------------- | :-------------- | :---------------------------------------------------- |
| <code style="color: #e5534b">**main**</code>    | **Production**  | 출시될 수 있는 안정된 상태의 코드를 관리합니다.       |
| <code style="color: #4a9c5d">**develop**</code> | **Development** | 모든 기능 개발이 이 브랜치를 기반으로 진행됩니다.     |
| <code style="color: #7a9eb5">**Feature**</code> | **Feature**     | 기능 구현 및 버그 수정을 위한 개별 작업 브랜치입니다. |

<details>
<summary> 🚀 개발 프로세스 </summary>
  
1. **이슈 기반 브랜치 생성**
   * 모든 작업 시작 전 GitHub Issue를 생성합니다. 
   * 해당 이슈 번호를 기준으로 develop 브랜치에서 기능 별 이슈 브랜치로 분기합니다. (<code style="color: #e5534b">**feat/기능명/#issue-number**</code>)

2. **작업 및 PR 생성**

   - 기능 구현이 완료되면 PR을 생성합니다.
   - 팀원 중 2명 이상의 Approve이 있을 때, develop 브랜치로 병합합니다.

3. **브랜치 삭제**
   - develop 브랜치로 병합 후, 사용이 끝난 이슈 브랜치는 삭제합니다.
   </details>
   <details>
   <summary> 📝 커밋 컨벤션 </summary>
   <br/>

- **<code style="color: #e5534b">**init: 커밋 메시지**</code>**

#### Prefix

| 유형         | 의미             | 상세 내용                             |
| :----------- | :--------------- | :------------------------------------ |
| **feat**     | 새로운 기능 추가 | 새로운 기능 구현                      |
| **fix**      | 버그 수정        | 오류 수정                             |
| **hotfix**   | 긴급 수정        | 치명적인 버그 즉시 수정               |
| **refactor** | 리팩토링         | 코드 구조 개선 (기능 변화 X)          |
| **style**    | 스타일 변경      | 스타일 코드 및 포맷팅 변경            |
| **docs**     | 문서 수정        | 문서 작성 및 수정                     |
| **chore**    | 기타 수정        | 빌드 업무, 패키지 매니저 등 설정 변경 |
| **build**    | 빌드 시스템      | 빌드 도구 및 종속성 변경              |
| **ci**       | CI 설정          | CI 설정 파일 및 스크립트 수정         |
| **perf**     | 성능 개선        | 성능 최적화 코드                      |
| **test**     | 테스트           | 테스트 코드 추가 및 수정              |
| **type**     | 타입 수정        | 타입 정의 수정                        |
| **asset**    | 리소스 추가      | 디자인 에셋(svg, img) 추가            |
| **rename**   | 이름/위치 수정   | 파일명 수정 및 폴더 이동              |
| **remove**   | 파일 삭제        | 미사용 파일 삭제                      |
| **revert**   | 커밋 되돌리기    | 이전 커밋 복구                        |
| **init**     | 초기 세팅        | 프로젝트 초기 세팅                    |

</details>

<br/>

### 📄 Code Convention

---

<details>
<summary> ⚛️ 컴포넌트 </summary>

- **리액트 컴포넌트만 PascalCase 사용**

  - 의미 없는 div 태그 사용 지양
  - 최상단 fragment 사용
  - children이 불필요할 땐 selfClosing사용하기 <code style="color: #e5534b">**<컴포넌트 이름/>**</code>

   <br/>

  ```tsx
  const InfoText = () => {
    return (
      <>
        <h1>Welcome!</h1>
        <p>We are Team-Decibel!</p>
      </>
    );
  };
  ```

</details>

<details>
<summary> 📁 폴더명 </summary>

- **케밥 케이스(kebab-case) 사용**

  - 폴더명과 파일명 모두 케밥 케이스를 적용합니다.
  - ❌️️ `UserProfile/`, `loginForm.tsx`
  - ✅ `user-profile/`, `login-form.tsx`

- **무조건 소문자로 시작**
  - 모든 파일과 폴더는 소문자로 시작하여 일관성을 유지합니다.
  - ❌ `Main-header.tsx`
  - ✅ `main-header.tsx`

</details>

<details>
<summary> 🧩 타입 </summary>

- **PascalCase 사용**

  - 타입과 인터페이스 이름은 `PascalCase`로 작성합니다.

- **interface 사용 지향**

  - 객체 구조 정의 시 `type` 대신 `interface`를 사용합니다.

- **Props 네이밍 규칙**

  - 컴포넌트의 Props 타입은 **[컴포넌트명] + `Props`** 접미사를 붙입니다.
  - `interface AmpProps { ... }`

- **일반 타입 네이밍 규칙**
  - 그 외 일반적인 타입 정의 시에는 이름 뒤에 **`Types`** 접미사를 붙입니다.
  - `interface UserTypes { ... }`

</details>

<details>
<summary> 💡 변수 </summary>

- **변수 및 상수 선언**

  - `const` → `let` 순서로 선언 (**var 금지**)
  - 상수는 `UPPER_SNAKE_CASE` 사용 (ex. `API_KEY`)
  - 줄임말 지양, 의미 있는 변수명 사용 (ex. `userData`)

- **데이터 구조 및 타입**

  - 복수 데이터는 끝에 `s` 사용 (ex. `userLists`)
  - Boolean은 `is` 접두사 사용 (ex. `isActive`)
  - 문자열 조합은 템플릿 리터럴(`` ` ``) 사용

- **`map` 사용 시 `key`에 `index` 사용 지양 (고유 `ID` 권장)**

</details>

<details>
<summary> 🔑 함수 </summary>

- **화살표 함수(`const`)** 사용을 원칙으로 합니다.
- **네이밍:** [동사 + 명사] 형식을 사용합니다.

  - `get`: 값 반환 | `create`: 신규 생성 | `check`: 로직 확인
  - `convert`: 형태 변환 | `add`/`minus`: 수치 연산 | `filter`: 배열 필터링

- **이벤트 핸들러:** 오직 이벤트 관련 함수에만 `handle`을 붙입니다.

  - 동작을 상세히 기록 (ex. `handleResetClick`, `handleSubmitClick`)

- **유틸 함수:** 반환값 중심으로 네이밍합니다.
  - Boolean 반환 시 `has` 접두사 사용 (ex. `hasEmail`)

</details>

<details>
<summary> 🏗️ 배열 & 구조 분해 </summary>
<br/>

- **배열 복사:** 스프레드 연산자(`...`) 사용
  - ex) `const copys = [...originals]`
- **반복문:** `for`문 지양, `forEach`나 `map` 사용 권장
- **구조 분해 할당:** 객체/배열 추출 시 필수 사용 (특히 Props 및 함수 파라미터)

```tsx
// 1. Interface 네이밍 (PascalCase + Types)
interface VoteAllInfoTypes {
  date: number;
  time: string;
}

interface UserDataTypes {
  userName: string;
  userBirth: string;
}

// 2. 구조 분해 할당 적용 예시
const MonthVoting = ({ date, time }: VoteAllInfoTypes) => { ... }

const checkIsUser = ({ userName, userBirth }: UserDataTypes) => { ... }
```

</details>

<details>
<summary> 🎨 스타일 </summary>
  
#### 🏗️ Markup Naming
- 요소를 감싸는 Wrapper는 `container`로 명칭 통일
- 스타일 네이밍은 요소의 의미가 드러나도록 작성 (ex. `user-list-container`)

#### 💄 CSS Property Order (Mozilla Style)

속성 기술 시 아래의 흐름(바깥에서 안쪽으로)을 최대한 준수합니다.

1. **Display & Layout:** `display`, `position`, `float`, `z-index`
2. **Box Model:** `width`, `height`, `margin`, `padding`
3. **Visual:** `border`, `background`, `opacity`
4. **Typography:** `color`, `font`, `text-align`, `white-space`
5. **Content:** `content` (pseudo-elements)
<details>
<summary> CSS 속성 기술 순서 </summary>

1) display `-객체의 노출여부/표현방식--`
2) list-style
3) position `-위치/좌표--`
4) float
5) clear
6) width / height `-크기/여백--`
7) padding / margin
8) border / background `-윤곽/배경--`
9) color / font `-글자/정렬--`
10) text-decoration
11) text-align / vertical-align
12) white-space
13) other text
14) content `-내용--`

</details>

</details>

<br/>

### ‼️ Ground Rule

---

<details>
<summary> 🙌 협업 규칙 </summary>

- **💡 모르는 것을 부끄러워하지 않기**

- **🙋‍♂️ 질문 많이 하기**

- **🌱 서로 배려하며 소통하기**

- **🧐 깊이 생각하고 고민해보기**

- **⏰ 매일 데일리 스크럼 지키기**

</details>

<details>
<summary> 🔍 코드리뷰 규칙 </summary>

#### 1️⃣ 둥글게 말하기

- **공격적이거나 단정적인 표현은 지양합니다.**

#### 2️⃣ 근거 있는 리뷰

- 개인의 취향이 아닌 **객관적인 이유와 맥락**을 설명합니다.
- 더 나은 대안이 있다면 관련 공식 문서나 레퍼런스(Reference) 링크 첨부를 적극 권장합니다.

#### 3️⃣ 코드래빗(AI)에 의존하지 않기

- AI 리뷰어는 보조 도구일 뿐입니다. 자동 리뷰에 의존하여 대충 넘기지 않습니다.
- 작성자의 **로직, 의도, 비즈니스 맥락**을 우리 스스로 꼼꼼히 확인하고 검증합니다.

#### 4️⃣ 비판적 수용

- 모든 리뷰 코멘트를 무조건적으로 수용할 필요는 없습니다.
- 의견이 다를 경우 **적극적으로 토론**하며, 의견을 나눕니다.

</details>
