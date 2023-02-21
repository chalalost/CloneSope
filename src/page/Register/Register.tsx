import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Input from '../../components/Input'
import { schema, Schema } from '../../utils/rule'
import { getRules } from '../../utils/rule'

// interface Data {
//     email: string | '',
//     password: string | '',
//     confirmPassword: string | ''
// }
type FormData = Pick<Schema, 'email' | 'password' | 'confirmPassword'>
export default function Register() {
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
                    <div className='lg:col-span-2 lg:col-start-4'>
                        {/* noValidate để disabled validate */}
                        {/* trong này đang validate mỗi khi ấn submit */}
                        <form className='rounded bg-white p-10 shadow-sm' onSubmit={(onSubmit)} noValidate >
                            <div className='text-2xl'>Đăng ký</div>
                            <Input
                                name='email'
                                register={register}
                                type='text'
                                className='mt-8'
                                errorMessage={errors.email?.message}
                                placeholder='Email'
                                rules={rules.email}
                            // {...register("email", {
                            //     required: {
                            //         value: true,
                            //         message: 'bat buoc'
                            //     },
                            //     pattern: {
                            //         value: /^\S+@\S+\.\S+$/,
                            //         message: 'ko dung dinh dang'
                            //     },
                            // })}
                            />
                            {/* dung input thong thuong se co them 1 div hien thi loi */}
                            {/* <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>{errors.email?.message}</div> */}
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

                            <Input
                                name='confirmPassword'
                                register={register}
                                type='password'
                                className='mt-2'
                                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                                errorMessage={errors.confirmPassword?.message}
                                placeholder='Confirm Password'
                                rules={rules.confirmPassword}
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
