type Prop={
    name: string;

}
export default function ColorButton ({name}: Prop) {

    return (
        <button className="mx-2 px-1 py-1 w-full sm:w-fit rounded-full my-2 lg:my-0
                  bg-gradient-to-br from-blue-800 via-blue-500 to-purple-600
                  "> <span className="block px-4 py-3 bg-black w-full rounded-full text-white
                  hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-500 hover:to-purple-600"
        >{name}</span>
        </button>
    )
}