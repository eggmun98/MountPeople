# MountPeople

배포 주소: **[https://eggmun.site/communitys/](https://eggmun.site/communitys/)**

<br>

## 기획 의도

등산을 즐기는 사람들이 모여 정보를 공유하고 중고 등산용품을 거래할 수 있는 종합적인 플랫폼의 부재를 느껴, 저는 독자적인 등산 커뮤니티와 중고 등산용품 판매 사이트를 개발하고자 하였습니다. 기존 등산 커뮤니티들이 플랫폼에 의존하여 제한된 기능만 제공하는 반면, Mount People은 플랫폼 의존에 벗어나 독자적인 등산 커뮤니티를 제공합니다. 또한, 등산용품 판매 사이트도 부족하여 중고마켓 + 커뮤니티를 합친 Mount People 사이트를 개발하였습니다. 이렇게 하여 등산을 즐기는 분들이 필요한 정보를 쉽게 얻을 수 있도록 하고, 등산용품을 보다 저렴하게 구매할 수 있도록 지원하며, 등산 커뮤니티의 활성화를 도모하는 목적으로 프로젝트를 기획하게 되었습니다.

<br>

## 기술 스택 및 선택 이유

| 기술    | 이유                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| React   | React는 컴포넌트 재사용에 용이하여 MountPeople 프로젝트에서 이미지 업로드 컴포넌트, 페이지 네이션 컴포넌트, 검색 바 컴포넌트 등을 재사용하기 위해 사용했습니다. 또한 React는 리렌더링에 효과적이므로 커뮤니티 페이지, 마켓 페이지 등에 적합하다고 판단하여 선택했습니다.                                                                                                                                                               |
| Next.js | Next.js는 React 기반의 서버 사이드 렌더링 프레임워크로, SEO 최적화 및 초기 로딩 시간 단축 등의 이점을 제공합니다. 이를 통해 Mount People 프로젝트에서 서버 사이드 렌더링을 구현하고, SEO 최적화와 초기 로딩 시간 개선을 이루었습니다. 또한 Next.js는 Next 라우팅을 지원하므로 동적인 라우팅 페이지를 쉽게 개발할 수 있었고, 다양한 플러그인과 라이브러리를 제공하여 개발 생산성을 높일 수 있었습니다. 따라서 Next.js를 선택하였습니다. |
| GraphQL | GraphQL은 클라이언트가 필요한 데이터를 쿼리 하는데 사용되는 쿼리 언어로, 서버 측의 데이터를 클라이언트 측에서 쉽게 관리할 수 있도록 해줍니다. Mount People 프로젝트에서는 GraphQL을 이용하여 데이터 요청 및 응답을 처리하고, 더욱 효율적인 데이터 관리를 위해 사용되었습니다. 또한 GraphQL은 쿼리 데이터를 캐시에 저장하여 같은 데이터를 다시 불러올 필요가 없어 효율적인 데이터 관리가 가능하므로 사용하였습니다.                     |
| Recoil  | Recoil은 React의 생애 주기에 맞추어 최적화된 상태 관리 라이브러리로, Mount People 프로젝트에서는 accessToken을 관리하고 공통적으로 사용되는 인풋창 닫기/열기 변수를 관리하는 등의 상태 관리에 사용되었습니다.                                                                                                                                                                                                                          |
| Emotion | Emotion은 리액트에서 스타일 컴포넌트를 나누기 위해 사용되었습니다. 이모션을 이용하면 스타일 컴포넌트를 작성하여 리렌더링에 용이하며, 컴포넌트의 재사용성과 유지보수성을 향상시킬 수 있습니다. Mount People 프로젝트에서도 이모션을 활용하여 컴포넌트의 스타일을 재사용하였습니다.                                                                                                                                                      |

<br>

## 시연 자료 

|페이지|영상|
|-|-|
|랜딩페이지|![랜딩페이지](https://github.com/eggmun98/MountPeople_Project/assets/120009393/3df062df-5d5a-46a5-b9ac-9634b16b25e8)|
|커뮤니티 작성 | ![커뮤니티 - 작성](https://github.com/eggmun98/MountPeople_Project/assets/120009393/b2d10385-6bb1-479a-87fb-48f0fb9d6662)| 
|등산마켓  리스트 | ![마켓 상품 리스트](https://github.com/eggmun98/MountPeople_Project/assets/120009393/1c774bfe-b734-4d33-9d07-13960fd4215a)|
|등산마켓  Q&A | ![마켓 상품 질문과 답변](https://github.com/eggmun98/MountPeople_Project/assets/120009393/c5352989-c5ec-4918-b486-15a2e58090ef)|





<br>

## 프로젝트 설명

Mount People은 등산 커뮤니티와 등산용품 중고마켓 사이트를 합쳐 만든 종합 등산 사이트입니다.

등산 커뮤니티 페이지는 비회원 서비스로 누구나 자유롭게 이용할 수 있습니다. 커뮤니티 페이지에서는 다양한 게시글을 작성하고, 댓글을 등록할 수 있습니다. 또한, 다른 이용자들과 소통하고 정보를 공유할 수 있는 기본적인 커뮤니티 기능을 제공합니다.

등산용품 중고마켓 페이지는 회원 전용 서비스로, 회원 가입 후 이용 가능합니다. 등산용품 중고마켓 페이지에서는 등산에 필요한 다양한 용품들을 거래할 수 있습니다. 상품을 등록하고 판매할 수도 있고, 필요한 용품을 구매할 수도 있습니다. 구매를 위해서는 마이페이지에서 포인트를 충전해야 합니다.

마이페이지에서는 내가 등록한 상품과 내가 구입한 상품, 포인트 내역 등 다양한 개인 정보를 확인할 수 있습니다. 또한, 프로필 수정과 비밀번호 변경 등의 기능도 제공합니다. 이를 통해 이용자들은 편리하게 등산 커뮤니티와 중고마켓 서비스를 이용할 수 있습니다.
<br>

## 위기 및 극복 방법

프로젝트에서 사용되는 무한 스크롤 함수에서 객체를 매개변수로 받아서 해당 객체의 키와 값을 변경해야 하는데, 이 과정에서 어려움이 있었습니다. 이 기능은 상품 리스트와 댓글 리스트 등 다양한 곳에서 사용되므로, 객체의 키와 값을 유동적으로 변경할 수 있어야 했었습니다.

```javaScript
  const onLoadMore = () => {
    if (data === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
```

위에 함수는 무한 스크롤 함수입니다. 데이터를 객체로 이용하여 다음 페이지를 불러오고, 이 함수가 여러 곳에서 사용되므로 data와 fetchUseditems를 유동적으로 바꿀 수 있어야 했습니다. 하지만 이를 구현하는 것이 어려웠습니다. 왜나하면 지금까지 객체를 Dot Notation 방법을 사용해 객체를 조작하였기 때문입니다. 그래서 다른 방법을 찾다가 Bracket Notation 방법이 기억이나 이 방법을 사용해 객체를 조작하였습니다.

```javaScript
  const { data, fetchMore } = props;
  const { onLoadMore } = useScrollMode({
    data,
    fetchKey: "fetchUseditems",
    fetchMore,
  });

```

Bracket Notation 방법을 사용하기 위해 무한 스크롤 함수를 hook로 만들었습니다. 그리고 무한 스크롤 함수에 매개변수로 불러올 데이터 객체인 data와 Bracket Notation 방법으로 조작할 fetchKey 객체, 그리고 다음 페이지를 불러오는 fetchMore 함수를 매개변수로 전달하였습니다.

```javaScript
export const useScrollMode = (
  args: IArgs
): {
  onLoadMore: () => Promise<void>;
} => {
  const { fetchKey, data, fetchMore } = args;
  const onLoadMore = async (): Promise<void> => {
    if (data === undefined || fetchKey === undefined) return;
    await fetchMore({
      variables: {
        page: Math.ceil((data[fetchKey].length ?? 10) / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (fetchMoreResult[fetchKey] === undefined) {
          return {
            [fetchKey]: [...prev[fetchKey]],
          };
        }

        return {
          [fetchKey]: [...prev[fetchKey], ...fetchMoreResult[fetchKey]],
        };
      },
    });
  };

  return {
    onLoadMore,
  };
};
```

이제, Bracket Notation 방법을 이용하여 객체의 키와 키값을 조작했습니다. onLoadMore 함수에서, fetchKey를 사용하여 data[fetchKey]로 데이터를 불러오고, updateQuery 함수에서도 [fetchKey]를 사용하여 객체를 업데이트했습니다. 이를 통해, fetchKey에 원하는 데이터의 이름을 넣으면, 해당 데이터를 무한 스크롤 함수에서 유동적으로 사용할 수 있습니다. 이를 통해 코드의 재사용성을 높였으며, Bracket Notation 방법을 익히면서 객체의 키와 키값을 조작하는 방법에 대한 능력을 향상시켰습니다.

<br>

## 회고

처음 MountPeople을 기획할 때, 코드를 재사용하면서도 코드의 가독성을 유지하는 방법과 코드의 줄일 수 있는 방법을 고민하면서 기획과 개발을 시작했습니다.

함수의 재사용성을 높이기 위해 Bracket Notation 방법과 hook으로 매개변수를 전달하는 방법을 익혔습니다. 또한, 많은 매개변수를 전달하면 가독성이 떨어질 수 있으므로 적절한 매개변수를 전달해 주기 위해 노력했습니다. 이렇게 하여 코드의 가독성과 유지보수성을 높였습니다.

또한, 코드를 리팩토링하면서 개발을 진행했습니다. 리팩토링으로 인해 코드를 개선하고, 프로젝트 전반에 발생하는 코드의 양을 줄이는 데 큰 도움이 되었습니다. 또한, 코드의 줄임으로써 다른 개발자들도 코드를 이해하기 쉬워졌습니다.

이번 프로젝트를 진행하면서, 코드의 재사용성과 리팩토링이 프로젝트의 생명주기를 강화하는데 큰 역할을 한다는 것을 배웠습니다. 또한 많은 문제점들이 발생했지만, 이를 해결하고 코드를 개선하며, 재사용성을 높임으로써 코드의 가독성과 유지보수성을 향상시키는 것이 중요하다는 것을 알게 되었습니다.

따라서 앞으로도 개발을 진행할 때, 항상 코드의 가독성, 유지보수성, 재사용성을 염두에 두고 개발을 할 것입니다. 또한 지속적으로 리팩토링과 개선을 하여 코드의 효율성을 높이고, 유지보수가 용이한 코드를 작성할 것입니다. 이러한 노력이 좋은 사용자 경험과 높은 퀄리티의 코드로 이어질 것이라 믿습니다.
