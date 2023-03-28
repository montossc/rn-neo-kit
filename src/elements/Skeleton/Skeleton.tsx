import React from 'react'

import ContentLoader, { Rect } from 'react-content-loader/native'

import type { SkeletonElementProps, SkeletonProps } from './Skeleton.type'

import { RS, useTheme } from 'rn-neo-kit'

export const Skeleton = ({ width, viewBoxWidth, viewBoxHeight, color, children }: SkeletonProps) => {
  const { colors } = useTheme()
  const containerWidth = RS.h(width)
  return (
    <ContentLoader
      speed={1.5}
      width={containerWidth}
      height={(containerWidth * viewBoxHeight) / viewBoxWidth}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      backgroundColor={(color || colors.skeleton) as string}
      foregroundColor={colors.background as string}
    >
      {children}
    </ContentLoader>
  )
}

const Text = ({ x, y, width, height }: SkeletonElementProps) => {
  return <Rect x={x.toString()} y={y.toString()} width={width.toString()} height={height.toString()} rx='8' ry='8' />
}

const Avatar = ({ x, y, width, height }: SkeletonElementProps) => {
  return (
    <Rect
      x={x.toString()}
      y={y.toString()}
      width={width.toString()}
      height={height.toString()}
      rx={(width / 2).toString()}
      ry={(height / 2).toString()}
    />
  )
}

const Box = ({ x, y, width, height }: SkeletonElementProps) => {
  return <Rect x={x.toString()} y={y.toString()} width={width.toString()} height={height.toString()} rx='10' ry='10' />
}

Skeleton.Text = Text
Skeleton.Avatar = Avatar
Skeleton.Box = Box
