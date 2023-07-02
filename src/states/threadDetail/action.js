import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  ADD_COMMMENT: 'detailThread/addComment',
  CLEAR_VOTE_THREAD_DETAIL: 'CLEAR_LIKE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UP_THREAD_DETAIL: 'TOGGLE_UP_THREAD_DETAIL',
  TOGGLE_DOWN_THREAD_DETAIL: 'TOGGLE_DOWN_THREAD_DETAIL',
  TOGGLE_UP_COMMENT: 'TOGGLE_UP_COMMENT',
  TOGGLE_DOWN_COMMENT: 'TOGGLE_DOWN_COMMENT',
  TOGGLE_CLEAR_VOTE_COMMENT: 'TOGGLE_CLEAR_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UP_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWN_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
function clearVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.CLEAR_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleUpVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_UP_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleDownVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_DOWN_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}
function toggleClearVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_CLEAR_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddComment(id, content) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment(id, content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleUpThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpThreadDetailActionCreator(authUser.id));

    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleDownThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleDownThreadDetailActionCreator(authUser.id));

    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncClearVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(clearVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.neutralVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleUpComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpVoteCommentActionCreator(authUser.id, commentId));
    try {
      await api.upVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleDownComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleDownVoteCommentActionCreator(authUser.id, commentId));
    try {
      await api.downVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncClearVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleClearVoteCommentActionCreator(authUser, commentId));
    try {
      await api.neutralVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  toggleUpThreadDetailActionCreator,
  toggleDownThreadDetailActionCreator,
  clearVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  toggleClearVoteCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncToggleUpThreadDetail,
  asyncToggleDownThreadDetail,
  asyncClearVoteThreadDetail,
  asyncToggleUpComment,
  asyncToggleDownComment,
  asyncClearVoteComment,
};
