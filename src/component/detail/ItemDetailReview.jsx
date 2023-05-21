import React, { useState } from "react";

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
      <div className="itemDetail_review">
        <div className="itemDetail_review_header">
          <h3 className="itemDetail_review_h3">Review</h3>
          <div className="itemDetail_review_div1" onClick={handleWriteClick}>
            Write
          </div>
        </div>
        {showForm && (
          <div className="review_input_modal">
            <input
              type="text"
              className="review_input1"
              value={reviewName}
              onChange={handleReviewName}
              placeholder="이름"
            />
            <input
              type="text"
              className="review_input2"
              value={reviewContent}
              onChange={handleReviewContent}
              placeholder="내용"
            />
            <input
              type="file"
              className="review_input3"
              onChange={handleReviewFile}
            />
            <span
              onClick={handleReviewSubmit}
              className="itemDetail_review_div1">
              Write
            </span>
          </div>
        )}
        <div>
          <table className="itemDetail_review_table">
            <tr className="itemDetail_review_tr">
              <td className="itemDetail_review_td1">Name</td>
              <td className="itemDetail_review_td2">Content</td>
              <td className="itemDetail_review_td3">Date</td>
            </tr>
            {reviews.map((review, index) => {
              return (
                <tr className="itemDetail_review_tr" key={index}>
                  <td className="itemDetail_review_td1">{review.reviewName}</td>
                  <td
                    className="itemDetail_review_td2"
                    onClick={() => handleReviewClick(review)}>
                    {review.reviewContent}
                  </td>
                  <td className="itemDetail_review_td3">{review.reviewDate}</td>
                </tr>
              );
            })}
            {showReview && selectedReview && (
              <div className="review_detail_modal">
                <div className="review_modal_header">
                  <h3 className="review_detail_h3">Review Detail</h3>
                  <div
                    className="review_detail_div1"
                    onClick={handleCloseReview}>
                    &times;
                  </div>
                </div>

                <div className="review_detail_content">
                  <div className="review_detail_div2">
                    {selectedReview.reviewName}
                  </div>

                  <div className="review_detail_div3">
                    {selectedReview.reviewContent}
                  </div>
                  <div className="review_detail_div4">
                    {selectedReview.reviewFile && (
                      <img src={selectedReview.reviewFile} alt="" />
                    )}
                  </div>
                </div>
              </div>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default ItemDetailReview;
