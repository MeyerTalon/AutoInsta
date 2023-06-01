export const getPostIds = () => {
    const savedPostIds = localStorage.getItem('posts')
      ? JSON.parse(localStorage.getItem('posts'))
      : [];
  
    return savedPostIds;
  };
  
  export const savePostId = (postIdArr) => {
    if (postIdArr.length) {
      localStorage.setItem('posts', JSON.stringify(postIdArr));
    } else {
      localStorage.removeItem('posts');
    }
  };
  
  export const removePostId = (postId) => {
    const savedPostIds = localStorage.getItem('posts')
      ? JSON.parse(localStorage.getItem('posts'))
      : null;
  
    if (!savedPostIds) {
      return false;
    }
  
    const updatedSavedPostIds = savedPostIds?.filter((savedPostId) => savedPostId !== postId);
    localStorage.setItem('posts', JSON.stringify(updatedSavedPostIds));
  
    return true;
  };
  