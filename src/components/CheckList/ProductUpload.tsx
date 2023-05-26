import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { IcCamera, IcEdit, IcStar, IcStarFilled } from '../../assets/icon';
import useModal from '../../hooks/useModal';
import { patchProductData } from '../../lib/category';
import { productDataState } from '../../recoil/atom';
import ProductEditModal from './ProductEditModal';

const ProductUpload = () => {
  const { isShowing, toggle } = useModal();

  const setProduct = useSetRecoilState(productDataState);
  const { title, address, dong, ho, state, price, size, description, id, image } =
    useRecoilValue(productDataState);

  // 별점
  const [grade, setGrade] = useState(0);
  const [starClicked, setStarClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  // 한줄평가
  const [comment, setComment] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(true);
  // 파일 업로드
  const ref = useRef<HTMLInputElement>(null);
  const [URLThumbnail, setURLThumbnail] = useState<string>('');

  // const product = useRecoilValue(productDataState);
  const [isSaved, setIsSaved] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(product);
  // });

  const createImageURL = (fileBlob: Blob | MediaSource) => {
    if (URLThumbnail) URL.revokeObjectURL(URLThumbnail);
    const url = URL.createObjectURL(fileBlob); // Blob -> url로 변환
    setURLThumbnail(url);
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || !files[0]) return;
    const uploadImage = files[0];
    createImageURL(uploadImage);
  };

  const onClickRef = () => {
    ref.current?.click();
  };

  const handleStarClick = (index: number) => {
    setStarClicked(prevStarClicked => {
      const clickStates = prevStarClicked.map((_, i) => i <= index);
      const updatedGrade = clickStates.filter(Boolean).length;
      setGrade(updatedGrade);
      return clickStates;
    });
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  // 매물 정보 PATCH 연결 시 필요한 변수들
  let editedState;
  switch (state) {
    case '전세':
      editedState = 'JEONSE';
      break;
    case '월세':
      editedState = 'MONTHLY';
      break;
    case '매매':
      editedState = 'SALE';
      break;
    default:
      editedState = 'EMPTY';
      break;
  }

  const REQ_DATA = {
    address: address,
    description: description,
    dong: dong,
    grade: grade,
    ho: ho,
    id: id,
    image: image,
    price: price,
    size: 0,
    state: editedState,
    title: title,
  };

  const patchProductInfo = async () => {
    const { data, isError } = await patchProductData(REQ_DATA);
    console.log(isError, '\n', data);
    if (isError) {
      setIsError(true);
    }
  };

  const handleSave = () => {
    if (comment) {
      setShowCommentInput(false);
    }
    setProduct(prev => ({
      ...prev,
      grade: grade,
      description: comment,
      image: '',
    }));
  };

  useEffect(() => {
    patchProductInfo();
  }, [isSaved]);

  if (isError) {
    navigate('/error');
  }
  return (
    <St.ProductUploadWrapper>
      <button type="button" onClick={() => setIsSaved(true)}>
        임시 수정 테스트용 버튼
      </button>
      <St.ProductName>{title}</St.ProductName>
      <St.Address>
        {address ? (
          <>
            {address}
            {dong && ho ? `${dong}동 ${ho}호` : ''}
          </>
        ) : (
          <St.DefaultAddress>{address ? address : '주소를 등록해주세요'}</St.DefaultAddress>
        )}
      </St.Address>
      <St.EditBtn type="button" onClick={toggle}>
        <IcEdit />
      </St.EditBtn>
      <ProductEditModal isShowing={isShowing} handleHide={toggle} />
      <St.ProductInfo>
        <St.UploadPicture type="button" onClick={onClickRef}>
          {URLThumbnail ? (
            <St.ThumbnailImg src={URLThumbnail} alt="thumbnail" />
          ) : (
            <>
              <IcCamera />
              <p>사진 올리기</p>
              <input
                hidden
                type="file"
                accept="image/jpg,image/png,image/jpeg"
                onChange={onImageChange}
                ref={ref}
              />
            </>
          )}
        </St.UploadPicture>
        <St.ProductDetail>
          <St.ProductTag>
            {state && <li>{state}</li>}
            {state && price && <li>{price}</li>}
            {state && size && <li>{size}평</li>}
          </St.ProductTag>
          <St.Grade>
            {array.map(el => (
              <button key={el} onClick={() => handleStarClick(el)}>
                {starClicked[el] ? <IcStarFilled /> : <IcStar />}
              </button>
            ))}
          </St.Grade>
          <St.DescriptionWrapper showCommentInput={showCommentInput}>
            {showCommentInput ? (
              <St.Description
                type="string"
                value={comment}
                placeholder="집의 상태, 주변환경, 가격 등을 고려해서 한 줄 평가를 입력해주세요."
                onChange={handleCommentChange}
              ></St.Description>
            ) : (
              <St.CommentText>{description}</St.CommentText>
            )}
          </St.DescriptionWrapper>
          <St.SaveBtnWrapper>
            <button type="button" onClick={handleSave}>
              저장
            </button>
          </St.SaveBtnWrapper>
        </St.ProductDetail>
      </St.ProductInfo>
    </St.ProductUploadWrapper>
  );
};

export default ProductUpload;

const St = {
  ProductUploadWrapper: styled.section`
    position: relative;

    width: 99.8rem;
    height: 35.3rem;
    padding: 3.7rem 3.3rem 3.6rem 4.4rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,

  ProductName: styled.p`
    margin-bottom: 1.1rem;

    ${({ theme }) => theme.fonts.Title3};
  `,

  Address: styled.p`
    margin-bottom: 2.9rem;

    color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Body4};
  `,

  DefaultAddress: styled.p`
    margin-bottom: 2.9rem;

    color: ${({ theme }) => theme.colors.Grey300};
    ${({ theme }) => theme.fonts.Body4};
  `,

  EditBtn: styled.button`
    position: absolute;
    top: 3.5rem;
    right: 3.3rem;

    border: none;
    background: transparent;
  `,

  ProductInfo: styled.article`
    display: flex;
    gap: 5.4rem;
  `,

  ProductDetail: styled.div`
    display: flex;
    flex-direction: column;
  `,

  UploadPicture: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    min-width: 31rem;
    height: 18.6rem;
    margin-top: 1.2rem;
    padding: 0;

    border: none;
    border-radius: 1.1rem;
    background-color: ${({ theme }) => theme.colors.Grey200};

    & > p {
      color: ${({ theme }) => theme.colors.Grey500};
      ${({ theme }) => theme.fonts.Body4};
    }
  `,

  ThumbnailImg: styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
  `,

  ProductTag: styled.ul`
    display: flex;
    gap: 1rem;

    min-height: 3.9rem;
    margin-bottom: 1.2rem;

    & > li {
      padding: 0.7rem 2.3rem;
      height: 3.9rem;

      border: 0.2rem solid ${({ theme }) => theme.colors.Blue};
      border-radius: 3.9rem;
      color: ${({ theme }) => theme.colors.Blue};
      ${({ theme }) => theme.fonts.Body2};
    }
  `,

  Grade: styled.div`
    margin-bottom: 2.7rem;

    & > button {
      padding: 0;
    }
  `,

  DescriptionWrapper: styled.div<{ showCommentInput: boolean }>`
    ${({ showCommentInput }) => !showCommentInput && `min-width: 56rem; min-height: 5.6rem;`}
  `,

  Description: styled.input`
    width: 55.4rem;
    height: 5.6rem;
    padding: 1.5rem 2.5rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Body2};

    &::placeholder {
      color: ${({ theme }) => theme.colors.Grey300};
      ${({ theme }) => theme.fonts.Body2};
    }

    & > p {
      color: ${({ theme }) => theme.colors.Grey600};
      ${({ theme }) => theme.fonts.Body2};
    }
  `,

  CommentText: styled.p`
    color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Body2};
  `,

  SaveBtnWrapper: styled.div`
    display: flex;
    justify-content: flex-end;

    & > button {
      width: 8rem;
      height: 3rem;
      margin-top: 1.6rem;

      border-radius: 0.4rem;
      background-color: ${({ theme }) => theme.colors.Blue};
      color: ${({ theme }) => theme.colors.White};
      ${({ theme }) => theme.fonts.Body4};
    }
  `,
};
