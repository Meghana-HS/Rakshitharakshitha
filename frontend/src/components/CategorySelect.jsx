import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CategorySelect = () => {
  const [showCards, setShowCards] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check which categories are unlocked based on where user came from
  const getUnlockedCategories = () => {
    const path = location.pathname;
    const unlocked = {
      general: true,
      traditional: path.includes('general') || path.includes('traditional') || path.includes('friends') || path.includes('sister'),
      friends: path.includes('traditional') || path.includes('friends') || path.includes('sister'),
      sister: path.includes('friends') || path.includes('sister')
    };
    return unlocked;
  };

  const [unlockedCategories, setUnlockedCategories] = useState(getUnlockedCategories());

  const categories = [
    { id: 'general', title: 'Our Moments', emoji: '🍽️✨', unlocked: unlockedCategories.general, route: '/general-intro' },
    { id: 'traditional', title: 'Traditional Days', emoji: '🌟👘', unlocked: unlockedCategories.traditional, route: '/traditional-intro' },
    { id: 'friends', title: 'Crazy Friends', emoji: '😄🎉', unlocked: unlockedCategories.friends, route: '/friends-intro' },
    { id: 'sister', title: 'My Sister ❤️', emoji: '💖👭', unlocked: unlockedCategories.sister, route: '/sister-intro' }
  ];

  useEffect(() => {
    setShowCards(true);
    setUnlockedCategories(getUnlockedCategories());
  }, [location]);

  const handleCategoryClick = (category) => {
    if (category.unlocked) {
      navigate(category.route);
    }
  };

  return (
    <div className="screen bg-soft-pink">
      <div className="content-overlay">
        <h1 className="emotional-title fade-in">
          Choose a Memory Box
        </h1>
        
        <p className="emotional-message fade-in-up" style={{ animationDelay: '0.3s', marginBottom: '2rem' }}>
          {unlockedCategories.sister ? 'All memories unlocked! 🎉' : 
           unlockedCategories.friends ? 'Almost there...' :
           unlockedCategories.traditional ? 'Keep exploring...' :
           'Start your journey...'}
        </p>
        
        <div className="category-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-card ${!category.unlocked ? 'locked' : ''} ${showCards ? 'fade-in-up' : ''}`}
              style={{ 
                animationDelay: `${index * 0.2}s`, 
                position: 'relative',
                opacity: category.unlocked ? 1 : 0.6,
                transform: category.unlocked ? 'scale(1)' : 'scale(0.95)'
              }}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="category-emoji">{category.emoji}</span>
              <h3 className="category-title">{category.title}</h3>
              {!category.unlocked ? (
                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
                  🔒 Complete previous memories
                </p>
              ) : (
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem', color: '#ff69b4' }}>
                  ✨ Ready to explore
                </p>
              )}
            </div>
          ))}
        </div>
        
        <button 
          className="gift-btn fade-in-up"
          onClick={() => navigate('/')}
          style={{ 
            animationDelay: '1s',
            background: 'linear-gradient(45deg, #87ceeb, #9370db)',
            marginTop: '2rem'
          }}
        >
          Back to Gift Box 🎁
        </button>
      </div>
      
      <div className="progress-indicator">
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot active"></div>
      </div>
    </div>
  );
};

export default CategorySelect;
