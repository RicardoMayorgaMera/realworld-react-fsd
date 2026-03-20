/**
 * ArticlesFeed component.
 */
import React from 'react';
import { TransitionUtils } from '../../utils/transition-utils';
import './articles-feed.ui.css';

export default function ArticlesFeed({ articles }) {
  return (
    <div className='articles-feed'
         style={TransitionUtils.fadeIn()}
         key={new Date().toString()}
    >
      {articles.map(article => (
        <div key={article.id} className='article-card' style={TransitionUtils.scaleAndElevate()}>
          <img src={article.imageSrc} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
}