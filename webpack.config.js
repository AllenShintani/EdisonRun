import { resolve as _resolve } from "path";

export const entry = './tsx/led.tsx';
export const output = {
    path: _resolve(__dirname, 'dist'), // 出力ディレクトリ
    filename: 'bundle.js', // 出力ファイル名
};
export const module = {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ],
};
export const resolve = {
    extensions: ['.tsx', '.ts', '.js'],
};
