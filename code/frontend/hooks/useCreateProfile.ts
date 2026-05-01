'use client'

import { useState } from "react";

export function useCreateProfile(){
    const [nickName, setNickName] = useState<string>("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const today = new Date().toISOString().slice(0, 10);
    const [date, setDate] = useState(today);

    
}