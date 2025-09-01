import React from 'react'

const SplitCard = ({children, leftBoxBg = 'bg-stone-400', rightBoxBg= 'bg-stone-100', textAligment = 'text-left'}) => {
    let Left, Right;
    React.Children.forEach(children, child =>{
        if (!React.isValidElement(child)) return;
        if (child.type?.slot === 'Left') Left = child.props.children;
        if (child.type?.slot === 'Right') Right = child.props.children;
    })
  return (
    <div className='grid grid-cols-1 md:grid-cols-[240px_1fr] md:m-4 rounded-3xl shadow-md overflow-hidden'>
        <div className={`${leftBoxBg} ${textAligment} p-4 shadow-md`}>
            {Left}
        </div>
        <div className={`${rightBoxBg} ${textAligment} p-4 shadow-md`}>
            {Right}
        </div>
    </div>
  )
}

const Left = ({ children }) => <>{children}</>
const Right = ({ children }) => <>{children}</>

Left.slot = 'Left';
Right.slot = 'Right';

SplitCard.Left = Left;
SplitCard.Right = Right;

export default SplitCard