import React from "react";

function NewPost() {
    return (
        <div>
            <div className="m-5 ">
                <div className="fs-4 text-center pb-3">New Post</div>
                <div className="row border border-dark p-3 rounded">
                    <div className="form-group mb-3">
                        <label for="formGroupExampleInput" className="form-label">Title of Post</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeHolder="I Want A Bycycle" />
                    </div>
                    <div classNames="mb-3">
                        <div className="form-group">
                            <label for="exampleInputPassword1">Post Discription</label>
                            <textarea className="form-control" placeHolder="Post Body goes here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>

                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-success my-3">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewPost;