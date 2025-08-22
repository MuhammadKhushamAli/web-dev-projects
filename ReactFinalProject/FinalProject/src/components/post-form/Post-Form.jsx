import storage from "../../appWrite/storage";
import database from "../../appWrite/databaseConfig";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from "react";
import { Button, Input, RTE, Select } from '../index';

export default function PostForm({ post }) {
    const { register, handleSubmit, control, watch, setValue, getValues } = useForm(
        {
            defaultValues: {
                title: post.title || '',
                description: post.description || '',
                slug: post.slug || '',
                status: post.status || 'active'
            }
        }
    );

    const userData = useSelector(state => state.auth.userData);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const postID = null;
        if (post) {
            const image = imageID ? await storage.UploadFile(data.images[0]) : null;

            if (image) {
                await storage.DeleteFile(post.imageID);
            }
            postID = await database.UpdateBlog(post.$id, {
                ...data,
                imageID: image ? image.$id : undefined
            });
        }
        else {
            const image = await storage.UploadFile(data.images[0]);
            postID = await database.CreateBlog({
                ...data,
                imageID: image ? image.$id : undefined,
                userID: userData.$id
            })
        }

        if (postID) {
            navigate(`/post/${postID}`);
        }
    }

    const slugTransformation = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d]+/g, "-");
        }
        return "";
    }, [])

    useEffect(() => {
        const input = watch((value, { name }) => {
            if (name == "title") {
                setValue("slug", slugTransformation(value.title), { shouldValidate: true });
            }

        })
        return () => input.unsubscribe();
    }, [slugTransformation, watch, setValue]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Title'
                placeholder='Enter post title'
                {...register('title', { required: !post })}
            />

            <Input
                label='Slug'
                placeholder='Enter post slug'
                {...register('slug', { required: !post })}
                onInput={(e) => setValue('slug', slugTransformation(e.target.value), { shouldValidate: true })}
            />

            <RTE
                label='Content'
                control={control}
                name='description'
                defaultValue={getValues('description')}
            />

            <Input
                label='Image'
                placeholder='Upload post image'
                type='file'
                {...register('images', { required: !post })}
            />

            {post && (
                <div>
                    <img src={storage.GetFilePreview(post.imageID)} alt={post.title} />
                </div>
            )}

            <Select
                label='Status'
                options={['active', 'inactive']}
                {...register('status', { required: !post })}
            />

            <Button type="submit">
                {post ? 'Update Post' : 'Create Post'}
            </Button>

        </form>
    )
}