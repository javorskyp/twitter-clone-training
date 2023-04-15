interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className="h-screen bg">
            {children}
        </div>
    )
}

export default Layout