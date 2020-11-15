import React from 'react'
import ReactDOM from 'react-dom'
import ComponentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'


const App = () =>   {
    return (
        <div className="ui contaner comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard> 
            <ApprovalCard>
                <ComponentDetail author="Sam" timeAgo="Today at 4:45PM" imgSrc={faker.image.avatar()} textContent="Nice blog post!"/>
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetail author="Tom" timeAgo="Today at 5:45PM" imgSrc={faker.image.avatar()} textContent="Nice blog post!"/>
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetail author="Max" timeAgo="Today at 6:45PM" imgSrc={faker.image.avatar()} textContent="Nice blog post!"/>
            </ApprovalCard>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)