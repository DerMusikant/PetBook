import React from 'react'


export const Post = ( { id, categoryId, src, userId, likes } ) => {
  return(
    <div>
      <div>
        {categoryId}
      </div>
      <div>
      <img src={src} />
      </div>
      <div>
        <div>
          Likes: {likes}
        </div>
        <div>
          Give a like
        </div>
      </div>
    </div>
  )
}
