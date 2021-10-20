import Discuss from "../model/discussPanel.js";

// view Discussion 
export function viewDiscussion(req, res) {
  try {
    let user_id = req.user;
    Discuss.find((err, result) => {
      if (err) {
        console.log(err);
        res.send({ auth: true, msg: "Some problem is there!! " });
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

// add comment to a post
export function addComment(req, res) {
  try {
    let d = new Date();
    console.log(req.body);
    d = d.toTimeString();
    console.log(req.body.id);
    Discuss.findById({ _id: req.body.id }, (err, discuss) => {
      if (err) {
        console.error(err);
      } else {
        let newComment = {
          author: req.body.author,
          comment: req.body.comment,
        };
        discuss.comments.push(newComment);
      }

      discuss.save(function (err, result) {
        if (err) throw err;
        else console.log(result);
      });
    });

    // send the response
    res.send("succefully inserted");
  } catch (e) {
    console.log(e);
  }
}

// add a new post handler
export function addPost(req, res) {
  try {
    let d = new Date();
    d = d.toTimeString();
    let myarray = new Array();
    let query = {
      author: req.body.author,
      title: req.body.title,
      post: req.body.discription,
      comments: myarray,
      time: d,
    };
    let addedPost = new Discuss(query);
    addedPost.save(function (err, data) {
      if (err) throw err;
      else res.send(data);
    });
    console.log(query);
  } catch (e) {
    console.error(e);
  }
}