import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this ?
        </div>
      </ApprovalCard>
      {/* <ApprovalCard> */}
      <CommentDetail
        author={faker.internet.userName()}
        text={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
        timeAgo="Today at 4:45am"
      />
      {/* </ApprovalCard> */}
      {/* <ApprovalCard> */}
      <CommentDetail
        author={faker.internet.userName()}
        text={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
        timeAgo="Today at 4:45am"
      />
      {/* </ApprovalCard> */}
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          text={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
          timeAgo="Today at 4:45am"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
