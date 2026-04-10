type Props = {
    children: React.ReactNode
}

function FormFields ({ children }: Props){
    return (
        <div>
            {children}
        </div>
    )
    
}

export default FormFields;