import Mainlayout from "layouts/Mainlayout";
import Container from "components/Container";
import Link from "../../node_modules/next/link";
import Table from "components/employee/Table";

const index = () => {
    return (
        <Index />
    )
}

export default index;

const breadCrumb: { title: string, link: string }[] = [
    {
        title: 'Home',
        link: '/employee'
    },
    {
        title: 'Employees',
        link: '#'
    },
]

const Index = () => {
    return (
        <Mainlayout title="employee">
            <Container
                breadCrumb={breadCrumb}
                title="Employees"
            >
                <div className="flex justify-end my-5">
                    <Link href={'/employee/create'}>
                        <span className="bg-green-500 text-white hover:bg-green-800 rounded-md px-3 py-2">Add Empoyee</span>
                    </Link>
                </div>
                <Table />
            </Container>
        </Mainlayout>
    )
}

