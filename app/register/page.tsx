
import { useSearchParams   } from 'next/navigation';
export default function register(req:any, res:any){
    console.log(req.method);
    if(req.method == 'POST'){
        
        const searchParams = useSearchParams();
        const nombres = searchParams.get('firstname') || '';
        return (
            <>
                <div>
                    Formulario enviado con éxito {nombres}
                </div>
            </>
        )

    }else{
        return (
            <>
            <div>
                Method not allowed, <a href="/" className="text-amber-700 underline">return home page</a>
            </div>
            </>
        )
    }
    
}
