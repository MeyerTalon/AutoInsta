export const getSavedPostIds = () => {
  const savedPostIds = localStorage.getItem('saved_posts')
    ? JSON.parse(localStorage.getItem('saved_posts'))
    : [];

  return savedPostIds;
};

export const savePostIds = (postIds) => {
  if (postIds.length) {
    localStorage.setItem('saved_posts', JSON.stringify(postIds));
  } else {
    localStorage.removeItem('saved_posts');
  }
};

export const removePostId = (postId) => {
  const savedPostIds = localStorage.getItem('saved_posts')
    ? JSON.parse(localStorage.getItem('saved_posts'))
    : null;

  if (!savedPostIds) {
    return false;
  }

  const updatedSavedPostIds = savedPostIds.filter((savedPostId) => savedPostId !== postId);
  localStorage.setItem('saved_posts', JSON.stringify(updatedSavedPostIds));

  return true;
};
