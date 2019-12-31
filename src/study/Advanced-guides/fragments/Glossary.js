// 带 key 的 Fragments

// 使用显式 <React.Fragment> 语法声明的片段可能具有 key。一个使用场景是将一个集合映射到一个 Fragments 数组 - 举个例子，创建一个描述列表：

import React from 'react';

function Glossary(props){
    return(
        <dl>
            {props.items.map(item => (
                // 没有`key`，React 会发出一个关键警告
                <React.Fragment key={item.id}>
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}

export default Glossary;