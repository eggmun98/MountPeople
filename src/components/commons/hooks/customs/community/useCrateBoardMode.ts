import { useRecoilState } from "recoil";
import { IData } from "../../../../units/community/write/types";
import { useMutationCrateBoard } from "../../mutation/community/useMutationCrateBoard";
import { addressState, imagesState, zipCodeState } from "../../../stores";
import { selectionModalMode } from "../closeModalMode";
import { FETCH_BOARDS } from "../../query/community/useQueryFetchBoards";

export const useCreateBoardMode = (): {
  onClickCreateBoard: (data: IData) => Promise<void>;
} => {
  const [createBoard] = useMutationCrateBoard();
  const [zipcode] = useRecoilState(zipCodeState);
  const [address] = useRecoilState(addressState);
  const [imageUrls] = useRecoilState(imagesState);
  const { onClickModal } = selectionModalMode();

  // 게시글 작성 함수
  const onClickCreateBoard = async (data: IData): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            title: String(data.title),
            password: data.password,
            contents: String(data.contents),
            youtubeUrl: data.youtubeUrl,
            images: imageUrls,
            boardAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      onClickModal(
        "게시글을 작성하였습니다.",
        `/communitys/community/${String(result?.data?.createBoard._id)}`
      )();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickCreateBoard,
  };
};
