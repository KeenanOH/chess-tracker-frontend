import React from "react"

import ListRow from "../../DashboardView/components/ListRow";

interface UserListProps {
    users: string[]
}

export default function UserList({ users }: UserListProps) {
    return (
        <div>
            { users.map((user) => {
                return (
                    <ListRow key={user} title={user} />
                )
            }) }
        </div>
    )
}
