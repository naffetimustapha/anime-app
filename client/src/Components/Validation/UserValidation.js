import * as yup from 'yup'

//login validation
const LoginValidation=yup.object().shape({
    email:yup.string().email().required("Email is required").trim(),
    password:yup.string().required("Password is required")
    .min(6,"password must be at least 6 characters")
    .max(20,"password must be less than 20 characters")
 
})

//register validation 
const RegisterValidation=yup.object().shape({
    email:yup.string().email().required("Email is required").trim(),
    password:yup.string().required("Password is required")
    .min(6,"password must be at least 6 characters")
    .max(20,"password must be less than 20 characters"),
    fullName:yup.string().required("Full name is required")
})

//profile Validation
const ProfileValidation = yup.object().shape({
    fullName : yup.string().required("Full name is required"),
    email:yup.string().email().required("Email is required").trim(),
})


//password validation

const PasswordValidation=yup.object().shape({
    oldPassword:yup
    .string()
    .required("Password is required")
    .min(6,"password must be at least 6 characters")
    .max(20,"password must be less than 20 characters"),
    
    newPassword :yup
    .string()
    .required("Password is required")
    .min(6,"password must be at least 6 characters")
    .max(20,"password must be less than 20 characters"),
    
    confirmPassword:yup
    .string()
    .required("Password is required")
    .min(6,"password must be at least 6 characters")
    .max(20,"password must be less than 20 characters")
    .oneOf([yup.ref("newPassword"),null],"password must match")

})


export {LoginValidation , RegisterValidation , ProfileValidation , PasswordValidation}