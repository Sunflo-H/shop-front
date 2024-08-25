# Project : 쇼핑몰 프로젝트

# Stack

- HTML
- CSS
- React

# API

- Firebase
- cloudinary

# Library

- React Query
- React Router
- SweetAlert
- Rechart
- axios
- react-icons
-

# 목표

예전에 연습삼아 JavaScript로 쇼핑몰 사이트의 메인페이지만 디자인을 카피하여 만들어 본 경험이 있습니다.
이번에는 React를 사용하여 SPA방식으로 메인 페이지, 카테고리 페이지, 장바구니 페이지 등 여러 페이지 간의 이동이 있고 서버와 데이터를 바로바로 주고받을 수 있는 온전한 쇼핑몰 사이트를 구현해보고 싶었습니다.

# 기능

- 모든 등급의 회원들이 사용 가능한 기능
  - 상품리스트
  - 장바구니
  - 찜하기
  - AI 추천
- 어드민 등급만 가능한 기능
  - 상품등록

# 스크린샷

## Full

![image](https://user-images.githubusercontent.com/70611956/233819409-fbe01be2-0d76-4bd4-8b95-8b8b69e134a7.png)
![image](https://user-images.githubusercontent.com/70611956/233821144-c00d9cc6-a48c-43c1-a62b-65c2186d2923.png)
![image](https://user-images.githubusercontent.com/70611956/233821151-59357d55-e007-4770-a616-87beca7f6981.png)

## Product List

![image](https://user-images.githubusercontent.com/70611956/233871224-975dd1c3-2c10-404a-bfe9-d8c0f31edc65.png)

## Product Detail

![image](https://user-images.githubusercontent.com/70611956/233871239-11e8af8a-2ca8-4af1-8953-3b89e9fc8c60.png)

## Cart

![image](https://github.com/Sunflo-H/shop/assets/70611956/771af165-0d32-448e-aaaf-3d3f53bb24cd)

## Favorites

![image](https://user-images.githubusercontent.com/70611956/233871270-13b477fa-8935-424f-81ab-7160ac673a46.png)

## Recommend

![image](https://user-images.githubusercontent.com/70611956/233871308-33a72f88-d5fd-4fff-a688-b55fd95b0e5b.png)

# 어려웠던점

## 첫 렌더링과 ProtectedRoute

ProtectedRoute를 만들어서 특정 URL에는 로그인한 회원만 또는 Admin 등급의 회원만 접근이 가능하도록 만들었습니다. 하지만 회원의 데이터를 가져오기 전, 첫 렌더링 단계에서 이미 회원데이터 체크를 하여 로그인을 했어도 접근이 불가능한 상태가 되었습니다. 이를 해결하기 위해 처음에는 Localstorage를 사용해서 첫 렌더링 단계에서는 firebase의 데이터를 사용하지 않고 LocalStorage의 데이터를 사용하도록 했습니다.
이후 react query를 사용하다가 isLoading을 보고 이것을 사용하면 더 적절하게 적용이 가능할 것 같아서 isLoading이라는 state를 사용하는 방법으로 업데이트 했습니다.

## 이미지 URL

상품을 등록할때 이미지 URL이 Firebase에 업로드가 되야하는데 이때 FakeURL로 업로드가 되었습니다. <input type="file">은 자주 사용하지 않아 파일업로드 과정에서 실수가 있었나 당황했지만 찾아보니 보안상의 이유로 FakeURL이 된것입니다. 파일을 직접 등록했을때의 URL은 사용이 불가능하니 우회해서 업로드를 하는 방법을 생각해내어 cloudinary를 사용해서 그 서버에 올려진 이미지URL를 사용하여 Firebase에 업로드하였습니다.
