import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Perfect Choice - Navigating Your Financial Future"}
                </title>
            </Head>
        </>
    )
}

export default PageHead