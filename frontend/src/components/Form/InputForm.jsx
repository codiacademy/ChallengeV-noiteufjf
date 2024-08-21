

export default function InputForm({rest}) {
    return (
        <div className="imputForm">
            <input type="text" required {...rest}/>
        </div>
    )
}