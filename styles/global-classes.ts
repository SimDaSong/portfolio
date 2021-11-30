/**
 * @todo: 글로벌 클래스를 어떻게 관리할지 고민
 * @body: 값들만 쓸건데 클래스로 선언해서 지역별 클래스에 상속하는 게 맞는건지 이렇게 쓰는 게 맞는건지 ..
*/
const globalClasses = {
    tableRow: "py-5 border-b border-gray-200 md:grid md:grid-cols-5 md:gap-6",
    tableWrap: "",
    text: "break-words font-bold sm:mt-0",
    subText: "text-sm font-large text-gray-500",
    cardGroupWrap: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
    cardWrap: "group relative",
}

export default globalClasses;