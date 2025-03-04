"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Jan", mention: 400, horizon: 240, faircoin: 240, homiio: 180 },
  { name: "Feb", mention: 300, horizon: 139, faircoin: 221, homiio: 190 },
  { name: "Mar", mention: 200, horizon: 980, faircoin: 229, homiio: 210 },
  { name: "Apr", mention: 278, horizon: 390, faircoin: 200, homiio: 160 },
  { name: "May", mention: 189, horizon: 480, faircoin: 218, homiio: 230 },
  { name: "Jun", mention: 239, horizon: 380, faircoin: 250, homiio: 210 },
  { name: "Jul", mention: 349, horizon: 430, faircoin: 210, homiio: 180 },
]

export function UsageStats() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="mention" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="horizon" stroke="#82ca9d" />
          <Line type="monotone" dataKey="faircoin" stroke="#ffc658" />
          <Line type="monotone" dataKey="homiio" stroke="#ff8042" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

