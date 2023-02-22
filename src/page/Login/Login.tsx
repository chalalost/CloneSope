import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import Input from '../../components/Input'
import { getRules, schema, Schema } from '../../utils/rule'

type FormData = Pick<Schema, 'email' | 'password'>

export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors } } = useForm<FormData>()

    const rules = getRules(getValues)
    const onSubmit = handleSubmit(
        (data) => {
            console.log(data)
        },
        (data) => {
            const password = getValues('password')
            console.log(password);
        }
    )
    return (
        <div className='bg-orange'>
            {/* <Helmet>
                <title>Đăng nhập | Shopee Clone</title>
                <meta name='description' content='Đăng nhập vào dự án Shopee Clone' />
            </Helmet> */}
            <div className='container'>
                <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
                    <div className='lg:col-span-1 lg:col-start-2 bg-slate-100'>

                    </div>
                    <div className='lg:col-span-2 lg:col-start-4'>
                        <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit}>
                            <div className='text-2xl'>Đăng nhập</div>
                            <Input
                                name='email'
                                register={register}
                                type='text'
                                className='mt-8'
                                errorMessage={errors.email?.message}
                                placeholder='Email'
                                rules={rules.email}
                            />
                            <Input
                                name='password'
                                register={register}
                                type='password'
                                className='mt-2'
                                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                                errorMessage={errors.password?.message}
                                placeholder='Password'
                                rules={rules.password}
                                autoComplete='on'
                            />

                            <div className="mt-3">
                                {/* <button type='submit'
                                    className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'>
                                    ĐĂNG NHẬP
                                </button> */}
                                <Button
                                    type='submit'
                                    className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
                                //   isLoading={loginMutation.isLoading}
                                //   disabled={loginMutation.isLoading}
                                >Đăng nhập
                                </Button>
                            </div>
                            <div className='mt-8 flex items-center justify-center'>
                                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                                <Link className='ml-1 text-red-400' to='/register'>
                                    Đăng ký
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
