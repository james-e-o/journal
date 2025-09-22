import { NextResponse } from "next/server";

export async function GET(params) {
        const { searchParams } = new URL(params.url);   
        const conversionPair = searchParams.get('pair')
        try {
            const res = await fetch(`https://api.tiingo.com/tiingo/fx/${conversionPair}/top?token=157c90292fa9a2e8dfbbc8f52efe771a995d9912`,{headers:{'content-type':'application/json'}});
            
            
            if (!res.ok) {
                return NextResponse.json(res.status)
            }
            
            const result = await res.json()
       
            console.log(result);
            return NextResponse.json(result)
        } catch (err) {
            console.error("Failed to fetch:", err);
            return NextResponse.json({error:'failed to fetch price'})
        }   
}