import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Input from '../../components/Input'

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()

    // const onSubmit = handleSubmit(data => {
    //     console.log(data)
    // })
    const onSubmit = (data: any) => console.log(data);
    return (
        <div className='bg-orange'>
            {/* <Helmet>
                <title>Đăng nhập | Shopee Clone</title>
                <meta name='description' content='Đăng nhập vào dự án Shopee Clone' />
            </Helmet> */}
            <div className='container'>
                <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
                    <div className='lg:col-span-2 lg:col-start-4'>
                        <form className='rounded bg-white p-10 shadow-sm' onSubmit={handleSubmit(onSubmit)}>
                            <div className='text-2xl'>Đăng ký</div>
                            <Input
                                name='email'
                                register={register}
                                type='email'
                                className='mt-8'
                                //errorMessage={errors.email?.message}
                                placeholder='Email'
                            />
                            <Input
                                name='password'
                                register={register}
                                type='password'
                                className='mt-2'
                                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                                //errorMessage={errors.password?.message}
                                placeholder='Password'
                                autoComplete='on'
                            />

                            <Input
                                name='confirm_password'
                                register={register}
                                type='password'
                                className='mt-2'
                                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                                //errorMessage={errors.confirm_password?.message}
                                placeholder='Confirm Password'
                                autoComplete='on'
                            />
                            <div className="mt-3">
                                <button type='submit'
                                    className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'>
                                    ĐĂNG KÝ
                                </button>
                            </div>
                            <div className='mt-8 flex items-center justify-center'>
                                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                                <Link className='ml-1 text-red-400' to='/login'>
                                    Đăng nhập
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
