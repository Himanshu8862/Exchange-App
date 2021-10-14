import React from "react";

function DiscussionCard() {
  return (
    <div className="container border border-primary rounded my-3">
      <div className="row">
        <div className="row-md-12">
          <div className="row mb-4">
            <div className=" col card-header">
              <div className="media flex-wrap w-100 align-items-center">
                {" "}
                <p className="fs-3 fw-bold text-center">I Need a Bicycle</p>
                
                <div className="media-body ml-3">
                  {" "}
                  <a href="javascript:void(0)" data-abc="true">
                    Tom Harry
                  </a>
                  <div className="text-muted small">13 days ago</div>
                </div>
              
              </div>
            </div>
            <div className="card-body">
            
              <p>
                {" "}
                Hello Everyone!!
                I need a bicycle. If anyone have it, please upload, I want to buy.{" "}
              </p>
            </div>
            <div className="card-footer d-flex flex-wrap justify-content-end align-items-center px-0 pt-0 pb-3">
              <div className="px-4 pt-3">
                {" "}
                <button type="button" className="btn btn-primary">
                  <i className="ion ion-md-create"></i>&nbsp; Reply
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionCard;