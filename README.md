프론트엔드 개발자 추연빈입니다.😀

현재 nextjs를 공부 하고 있어요.

짧은 기간에 밀도있게 프로젝트를 진헹하면 좋은 경험이 될 것 같아서 지원했습니다.

## Assignment 1 - `Login`

- useEffect로 로컬스토리지에 email & password가 있을경우 메인 페이지로 이동하게끔 구현하였습니다.
- useRef를 사용하여 입력할 때 불필요한 렌더링을 방지하였습니다.
- useCallback을 사용하여 함수들을 재사용할 수 있게끔 적용 했습니다.
- 
## Assignment2 - `GNB`

- position: sticky; top:0;으로 상단에 위치하게끔 만들었습니다.
- media query로 화면 크기가 768px이하가 되면 검색 바를 display: none; 처리하였습니다.
- logout 아이콘을 클릭하면 localStorage를 비우고 로그인 페이지로 이동하게끔 구현하였습니다.
  
## Assignment3 - `Validation`

- email, password 유효성검사 하는 함수를 각각 분리 하였습니다.
- 유효성검사 함수를 통과하지 못하면 input border를 red로 변경 돠게끔 구현하였습니다.
- email & password가 validator에 통과되면 상태를 변화 시켜 login button이 활성화 되도록 구현하였습니다.

## Assignment4 - `Routing`

- 로그인,로그아웃 시 location.href로 페이지 이동할 수 있게끔 구현하였습니다.

## Assignment5 - `Feeds`

- 컴포넌트 재사용성을 위해 FeedList, Feed, Comments, Comment, CommentForm로 각각 컴포넌트를 나눠보았습니다.
- 게시글 데이터 요청하는 비즈니스 로직을 api폴더를 만들어 구현하였습니다.
- useCallback을 사용하여 함수들을 재사용할 수 있게끔 적용 했습니다.
- Feed
  - useEffect로 이미지를 만들어 이미지가 로드가 되면 Feed 컴포넌트가 렌더링 될 수 있게 만들었습니다.
- CommentForm
  - comment input창에 문자열이 존재하면 isActive 상태로 게시 버튼이 활성화 되게끔 만들었습니다.
  - 게시 버튼을 누르면 props로 전달된 addComments함수를 동작하여 댓글이 추가 되게끔 만들었습니다.
