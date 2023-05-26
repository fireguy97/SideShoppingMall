import React, { useState } from "react";
import * as S from "./ItemDetailStyles";

const ItemDetailReview = () => {
  const [reviewName, setReviewName] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [reviewFile, setReviewFile] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const handleReviewName = (e) => {
    setReviewName(e.target.value);
  };

  const handleReviewContent = (e) => {
    setReviewContent(e.target.value);
  };

  const handleReviewFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const fileUrl = reader.result;
        setReviewFile(fileUrl);
      };

      reader.readAsDataURL(file);
    } else {
      setReviewFile(null);
    }
  };

  const handleReviewSubmit = () => {
    const newReview = {
      reviewName: reviewName,
      reviewContent: reviewContent,
      reviewFile: reviewFile,
      reviewDate: new Date().toLocaleString(),
    };

    setReviews([...reviews, newReview]);

    // 상태 초기화
    setReviewName("");
    setReviewContent("");
    setReviewFile(null);
    setShowForm(false);
  };
  const handleWriteClick = () => {
    setShowForm(true); // 폼 가시성 활성화
  };

  const handleReviewClick = (review) => {
    setSelectedReview(review);
    setShowReview(true);
  };

  const handleCloseReview = () => {
    setShowReview(false);
    setSelectedReview(null);
  };

  return (
    <>
      <S.ItemDetailReview>
        <S.ItemDetailReviewHeader>
          <S.ItemDetailReviewH3>Review</S.ItemDetailReviewH3>
          <S.ItemDetailReviewDiv1 onClick={handleWriteClick}>
            Write
          </S.ItemDetailReviewDiv1>
        </S.ItemDetailReviewHeader>
        {showForm && (
          <S.ReviewInputModal>
            <S.ReviewInput1
              type="text"
              value={reviewName}
              onChange={handleReviewName}
              placeholder="이름"
            />
            <S.ReviewInput2
              type="text"
              value={reviewContent}
              onChange={handleReviewContent}
              placeholder="내용"
            />
            <S.ReviewInput3 type="file" onChange={handleReviewFile} />
            <S.ReviewSpan1 onClick={handleReviewSubmit}>Write</S.ReviewSpan1>
          </S.ReviewInputModal>
        )}
        <div>
          <S.ItemDetailReviewTable>
            <S.ItemDetailReviewTr>
              <S.ItemDetailReviewTd1>Name</S.ItemDetailReviewTd1>
              <S.ItemDetailReviewTd2>Content</S.ItemDetailReviewTd2>
              <S.ItemDetailReviewTd3>Date</S.ItemDetailReviewTd3>
            </S.ItemDetailReviewTr>
            {reviews.map((review, index) => {
              return (
                <S.ItemDetailReviewTr key={index}>
                  <S.ItemDetailReviewTd1>
                    {review.reviewName}
                  </S.ItemDetailReviewTd1>
                  <S.ItemDetailReviewTd2
                    onClick={() => handleReviewClick(review)}>
                    {review.reviewContent}
                  </S.ItemDetailReviewTd2>
                  <S.ItemDetailReviewTd3>
                    {review.reviewDate}
                  </S.ItemDetailReviewTd3>
                </S.ItemDetailReviewTr>
              );
            })}
            {showReview && selectedReview && (
              <S.ReviewDetailModal>
                <div>
                  <S.ReviewDetailH3>Review Detail</S.ReviewDetailH3>
                  <S.ReviewDetailDiv1 onClick={handleCloseReview}>
                    &times;
                  </S.ReviewDetailDiv1>
                </div>

                <div className="review_detail_content">
                  <div>Name : {selectedReview.reviewName}</div>

                  <S.ReviewDetailDiv3>
                    Content : {selectedReview.reviewContent}
                  </S.ReviewDetailDiv3>
                  <S.ReviewDetailDiv4>
                    {selectedReview.reviewFile && (
                      <S.ReviewDetailImg
                        src={selectedReview.reviewFile}
                        alt=""
                      />
                    )}
                  </S.ReviewDetailDiv4>
                </div>
              </S.ReviewDetailModal>
            )}
          </S.ItemDetailReviewTable>
        </div>
      </S.ItemDetailReview>
    </>
  );
};

export default ItemDetailReview;
