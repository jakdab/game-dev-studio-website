import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'games', 'about', 'platforms'].map((item, index) => (
            <a 
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#F82949'} : { }}
            />
        ))}
    </div>
  )
}

export default NavigationDots;