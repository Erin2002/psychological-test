'use Client'
import MobileFrame from "@/component/layout/MobileFrame"
import Image from "next/image"
import title from "@/../public/0.Start/title.svg"
import btn_start from "@/../public/0.Start/btn_start.png"
import blur_circle_0 from "@/../public/0.Start/blurCircle_0.png"

export default function StartPage({nextStep}){ //收到nextStep


    return(
        <>
        <MobileFrame>
            <div className="flex justify-center items-center flex-col gap-[60px]">
                <Image className="absolute top-0 -translate-y-1/2" src={blur_circle_0} alt="Picture of the author"></Image>
                <Image className="absolute bottom-0 translate-y-1/2" src={blur_circle_0} alt="Picture of the author"></Image>
        <Image src={title}></Image>
        <div className="text-[#B95F0F] font-[500] text-center text-[14px] leading-loose tracking-wide">有些人天生酥脆，有些人出爐時就塌了。
你努力發酵、翻滾、等待出爐，
結果還是變成一坨可頌災難。
沒關係，這世界不缺完美麵包，
缺的是——像你一樣軟爛卻獨特的存在。
現在，就來看看你是什麼等級的失控可頌吧。</div>
        <Image onClick={nextStep} className="w-[160px]" src={btn_start}></Image>
        </div>
            </MobileFrame>
            

        </>
    )
}