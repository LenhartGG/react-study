import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => {
    return number * 2;
});
console.log(doubled);

const ListItems = numbers.map((number, index) => {
    return <li key={number.toString()}>{number}</li>;
})

ReactDOM.render(
    <ul>{ListItems}</ul>,
    document.getElementById("root10")
)

// 正确的使用 key 的方式
function ListItem(props) {
    return <li>{props.vaule}</li>
}

// function NumberList(props) {
//     const numbers = props.numbers;
//     const ListItems = numbers.map((number) =>
//         <ListItem key={number.toString()} value={number} />
//     );

//     return (
//         <ul>
//             {ListItems}
//         </ul>
//     );
// }

// 在 JSX 中嵌入 map
function NumberList(props){
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map(number=>
                <ListItem key={number.toString()}
                    value={number}/>
            )}
        </ul>
    );
}

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById("root11")
)

//key 只是在兄弟节点之间必须唯一，最好使用 id 作为 key

function Blog(props){
    const sidebar = (
        <ul>
            {
                props.posts.map((post) => 
                    <li key={post.id}>
                        {post.title}
                    </li>
                )
            }
        </ul>
    )
    const content = props.posts.map((post, index) => {
        return (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        )
    })
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
    
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root12')
);