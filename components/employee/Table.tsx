const Table = () => {
    return (
        <div className="bg-white p-2">
            <table className="w-full mt-3">
                <thead className=" text-white bg-gray-600">
                    <tr className="">
                        <th className="p-3">SN</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Address</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Age</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        [0, 0, 0, 0, 0].map((data, i) => {
                            return (
                                <tr className="hover:bg-gray-200  p-3 text-center">
                                    <td className="p-3 ">1</td>
                                    <td className="p-3">Ameer</td>
                                    <td className="p-3">ktm</td>
                                    <td className="p-3">9807590255</td>
                                    <td className="p-3">24</td>
                                    <td className="p-3">edit</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;