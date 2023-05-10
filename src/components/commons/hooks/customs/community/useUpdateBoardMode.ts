import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { UPDATE_BOARD } from "../../mutation/community/useMutationUpdateBoard";
import { useRecoilState } from "recoil";
import { addressState, imagesState, zipCodeState } from "../../../stores";
import { IData } from "../../../../units/community/write/types";
import { selectionModalMode } from "../closeModalMode";
import { FETCH_BOARD } from "../../query/community/useQueryFetchBoard";
import { FETCH_BOARDS } from "../../query/community/useQueryFetchBoards";

export const useUpdateBoardMode = (): {
  onClickUpdateButton: (data: IData) => Promise<void>;
} => {
  const router = useRouter();
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [zipcode] = useRecoilState(zipCodeState);
  const [address] = useRecoilState(addressState);
  const [imageUrls] = useRecoilState(imagesState);
  const { onClickModal } = selectionModalMode();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.page,
    },
  });

  // 게시글 수정 함수
  const onClickUpdateButton = async (formData: IData): Promise<void> => {
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.page,
          password: formData.password,
          updateBoardInput: {
            title: formData.title,
            contents: formData.contents,
            youtubeUrl: formData.youtubeUrl,
            images: imageUrls,
            boardAddress: {
              zipcode,
              address,
              addressDetail: formData.addressDetail,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.page,
            },
          },
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      onClickModal(
        "게시글을 수정하였습니다.",
        `/communitys/community/${String(result?.data?.updateBoard._id)}`
      )();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickUpdateButton,
  };
};
